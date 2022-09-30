import { AppError, IS_ACTIVE } from '@commons/constant';

const db = require('@models');
const { sequelize, Sequelize, User } = db.default;
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
  UserLoginParams,
  UserRegisterParams,
} from '@controllers/models/UserRequestModel';
import Joi = require('joi');

export async function register(registerUser: UserRegisterParams) {
  let user = await User.findOne({
    where: {
      user_name: registerUser.user_name,
    },
  });

  if (user) throw new AppError({ code: 404, message: 'Username has existed' });

  console.log(registerUser);

  if (BasicRegisterUserSchema.validate(registerUser).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      BasicRegisterUserSchema.validate(registerUser).error.details,
      null,
    );
  }

  const result = await sequelize.transaction(async (t) => {
    user = await User.create(registerUser, { transaction: t });
    return user;
  });

  const { password, ...data } = result.dataValues;

  return { ...data, token: result.generateToken() };
}

export async function login(loginUserParams: UserLoginParams) {
  if (BasicLoginUserSchema.validate(loginUserParams).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      BasicRegisterUserSchema.validate(loginUserParams).error.details,
      null,
    );
  }

  const user = await User.findOne({
    where: {
      user_name: loginUserParams.user_name,
    },
  });

  if (!user) throw new Error('Invalid credentials');

  if (!user.authenticate(loginUserParams.password, user.password)) throw new Error('Invalid credentials');

  const { password, ...data } = user.dataValues;

  return { ...data, token: user.generateToken() };
}

export async function getAllUsers(page: number, limit: number) {
  const userCount = await User.count({
    where: {
      role: 'user',
    },
  });

  let totalPage = Math.ceil(userCount / limit);

  const users = await User.findAll({
    where: {
      role: 'user',
    },
    limit,
    offset: (page - 1) * limit,
  });

  return { data: users, page, totalPage, limit };
}
