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
  BasicUpdateUserSchema,
  UserLoginParams,
  UserRegisterParams,
  UserUpdateParams,
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

export async function update(id: string, updateUserParams: UserUpdateParams) {
  if (BasicUpdateUserSchema.validate(updateUserParams).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      BasicUpdateUserSchema.validate(updateUserParams).error.details,
      null,
    );
  }

  const user: any = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) throw new Error('User is not found');

  user.name = updateUserParams.name || user.name;
  user.user_name = updateUserParams.user_name || user.user_name;
  user.role = updateUserParams.role || user.role;
  user.profile_picture = updateUserParams.profile_picture || user.profile_picture;

  await user.save();

  return user;
}

export async function deleteUser(id: string) {
  const user = await User.findOne({
    where: {
      id,
      role: 'user',
    },
  });

  if (!user) throw new Error('User not found');

  await User.destroy({
    where: {
      id,
      role: 'user',
    },
    individualHooks: true,
  });

  return { user_id: id };
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
