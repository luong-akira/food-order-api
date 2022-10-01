import { AppError, IS_ACTIVE } from '@commons/constant';

const db = require('@models');
const { sequelize, Sequelize, User, Order, Food } = db.default;
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

export async function createOrder(foodId: number, userId: string, quantity: number) {
  console.log(foodId, userId, quantity);
  const food: any = await Food.findOne({
    where: {
      id: foodId,
      UserId: {
        [Op.ne]: userId,
      },
    },
  });

  if (!food) throw new Error('Food does not exist');

  if (quantity > food.stock || quantity < 1) throw new Error('quanity exceed stock or quanity is less than 1');
  const order = await Order.create({
    UserId: userId,
    FoodId: foodId,
    quantity,
  });

  return order;
}
