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

import { OrderFoodRequest } from '@controllers/models/OrderRequestModel';
import { orderQueue } from '../queues/order/order.queue';

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

  if (orderDetails.isDelivered) throw new Error('Order is being delivered');

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
