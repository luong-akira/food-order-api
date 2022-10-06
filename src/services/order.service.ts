const db = require('@models');
const { sequelize, Sequelize, User, Order, Food, OrderDetails } = db.default;
const { Op } = Sequelize;
import {
  SuccessResponseModel,
  withSuccess,
  supplierNotFound,
  successfulDelete,
  Success,
  // withPagingSuccess,
} from '@controllers/models/BaseResponseModel';
import { HostNotFoundError } from 'sequelize/types';
// from './models/BaseResponseModel';
import {
  BasicLoginUserSchema,
  BasicRegisterUserSchema,
  BasicUpdateUserSchema,
  UserLoginParams,
  UserRegisterParams,
  UserUpdateParams,
} from '@controllers/models/UserRequestModel';
import Joi = require('joi');
const querystring = require('qs');
const crypto = require('crypto');
const dateFormat = require('dateformat');
const ip = require('ip');

import { OrderFoodRequest } from '@controllers/models/OrderRequestModel';
import { orderQueue } from '../queues/order/order.queue';
import { VNPAY } from '@commons/constant';

export async function getMyOrders(userId: string, limit: number, page: number) {
  const myOrders: any = await Order.findAll({
    where: {
      UserId: userId,
    },
    include: [
      {
        model: Food,
        attributes: ['id'],
        through: {},
      },
    ],

    limit,
    offset: (page - 1) * limit,
  });

  if (!myOrders) throw new Error('My order does not exist');

  return myOrders;
}

export async function getOrderList(userId: string, limit: number, page: number) {
  const foods: any = await Food.findAll({
    where: {
      UserId: userId,
    },
  });

  const orderList = await Promise.all(
    foods.map(async (food) => {
      const orderDetails = await OrderDetails.findOne({
        where: {
          FoodId: food.id,
        },
      });

      return orderDetails;
    }),
  );

  return orderList;
}

export async function createOrder(foods: OrderFoodRequest[], userId: string, addressId: string) {
  if (foods.length < 1) throw new Error("Don't have any orders");

  foods.forEach((food) => {
    (async () => {
      const existFood = await Food.findOne({
        where: {
          id: food.foodId,
          UserId: {
            [Op.ne]: userId,
          },
        },
      });

      if (!existFood) throw new Error('Food does not exist');
      if (food.quantity > existFood.stock || food.quantity < 1) {
        throw new Error('quanity exceed stock or quanity is less than 1');
      }
    })();
  });

  const order: any = await Order.create({
    UserId: userId,
    AddressId: addressId,
  });

  foods.forEach((food) => {
    (async () => {
      const existFood = await Food.findOne({
        where: {
          id: food.foodId,
          UserId: {
            [Op.ne]: userId,
          },
        },
      });

      if (!existFood) throw new Error('Food does not exist');
      if (food.quantity > existFood.stock || food.quantity < 1) {
        throw new Error('quanity exceed stock or quanity is less than 1');
      }

      await orderQueue.add('order', {
        FoodId: food.foodId,
        OrderId: order.id,
        quantity: food.quantity,
        total: food.quantity * existFood.price,
      });
    })();
  });

  return order;
}

export async function abortOrder(orderDetailsId: string, UserId: string) {
  const orderDetails: any = await OrderDetails.findOne({
    where: {
      id: orderDetailsId,
    },
  });

  if (!orderDetails) throw new Error('Order details is not found');

  const order = await Order.findOne({
    where: {
      id: orderDetails.OrderId,
      UserId,
    },
  });

  if (!order) throw new Error('Order is not found');

  if (orderDetails.isDelivered || orderDetails.isPay) throw new Error('Order is being delivered or you have paid');

  await orderDetails.destroy();

  return { id: orderDetails.id };
}

export async function setIsDelivered(orderDetailsId: string, userId: string) {
  const orderDetails: any = await OrderDetails.findOne({
    where: {
      id: orderDetailsId,
    },
  });

  if (!orderDetails) throw new Error('Order details is not exist');

  const food = await Food.findOne({
    where: {
      id: orderDetails.FoodId,
      UserId: userId,
    },
  });

  if (!food) throw new Error('Food is not found');

  orderDetails.isDelivered = true;

  await orderDetails.save();

  return { message: `Order : ${orderDetailsId} is delivering` };
}

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
}

export async function createPaymentUrl(req: any, userId: string, orderDetailsId: string) {
  const orderDetails: any = await OrderDetails.findOne({
    where: {
      id: orderDetailsId,
      isPaid: false,
    },
  });

  if (!orderDetails) throw new Error('Orderdetails is not exist');

  const food: any = await Food.findOne({
    where: {
      id: orderDetails.FoodId,
    },
    include: [User],
  });

  if (!food) throw new Error('Food is not exist');
  console.log(food);

  let vnpUrl = VNPAY.VNP_URL;
  let returnUrl = VNPAY.VNP_RETURN_URL;

  let date = new Date();

  let createDate = dateFormat(date, 'yyyymmddHHmmss');
  let amount = orderDetails.total;

  let orderInfo = req.body.orderDescription;
  let orderType = req.body.orderType;
  let locale = 'vn';
  let currCode = 'VND';
  let vnp_Params = {};
  vnp_Params['vnp_Version'] = '2.1.0';
  vnp_Params['vnp_Command'] = 'pay';
  vnp_Params['vnp_TmnCode'] = food.User.vnp_tmncode;
  vnp_Params['vnp_Locale'] = locale;
  vnp_Params['vnp_CurrCode'] = currCode;
  vnp_Params['vnp_TxnRef'] = orderDetailsId;
  vnp_Params['vnp_OrderInfo'] = orderInfo;
  vnp_Params['vnp_OrderType'] = orderType;
  vnp_Params['vnp_Amount'] = amount * 100;
  vnp_Params['vnp_ReturnUrl'] = returnUrl;
  vnp_Params['vnp_IpAddr'] = ip.address();
  vnp_Params['vnp_CreateDate'] = createDate;

  vnp_Params = sortObject(vnp_Params);

  let signData = querystring.stringify(vnp_Params, { encode: false });
  let hmac = crypto.createHmac('sha512', food.User.vnp_hashsecret);
  let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
  vnp_Params['vnp_SecureHash'] = signed;
  vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
  return vnpUrl;
}

export function vnpayReturn(req: any) {
  var vnp_Params = req.query;

  var secureHash = vnp_Params['vnp_SecureHash'];

  delete vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHashType'];

  vnp_Params = sortObject(vnp_Params);

  let tmnCode = VNPAY.VNP_TMNCODE;
  let secretKey = VNPAY.VNP_HASHSECRET;

  var signData = querystring.stringify(vnp_Params, { encode: false });
  var crypto = require('crypto');
  var hmac = crypto.createHmac('sha512', secretKey);
  var signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');

  if (secureHash === signed) {
    return { code: vnp_Params['vnp_ResponseCode'], orderId: vnp_Params['vnp_TxnRef'] };
  } else {
    return { code: '97' };
  }
}
