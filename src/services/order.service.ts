import { AppError, IS_ACTIVE } from '@commons/constant';

const db = require('@models');
const { sequelize, Sequelize, User, Order, Food ,OrderDetails} = db.default;
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
import * as fs from 'fs';
import * as path from 'path';
import { OrderFoodRequest } from '@controllers/models/OrderRequestModel';

export async function createOrder(foods: OrderFoodRequest[], userId: string,addressId:string) {
  if(foods.length < 1) throw new Error("Don't have any orders")

  const order :any = await Order.create({
    UserId: userId,
    AddressId:addressId
  });

  foods.forEach((food) => {
    (async()=>{
      const existFood = await Food.findOne({
        where:{
          id:food.foodId,
          UserId:{
            [Op.ne]:userId
          }
        }
      });
  
      if (!existFood) throw new Error('Food does not exist');
      if (food.quantity > existFood.stock || food.quantity < 1) throw new Error('quanity exceed stock or quanity is less than 1'); 
    
      const orderDetails = await OrderDetails.create({
        FoodId:food.foodId,
        OrderId:order.id,
        quantity:food.quantity,
        price:food.quantity *existFood.price
      })
    })();
  })

  return order;
}


export async function abortOrder(orderDetailsId:string,UserId:string){
  const orderDetails :any= await OrderDetails.findOne({
    where:{
      id:orderDetailsId
    }
  })

  if(!orderDetails) throw new Error("Order details is not found")

  const order = await Order.findOne({
    where:{
      id:orderDetails.OrderId,
      UserId
    }
  })

  if(!order) throw new Error("Order is not found");

  if(orderDetails.isDelivered) throw new Error("Order is being delivered");

  await orderDetails.destroy();

  return {id:orderDetails.id}

}