import { IS_ACTIVE, apiCode, AppError, PRODUCT_MEDIA_TYPE } from '@commons/constant';
import { ApplicationController } from './';
import { handlePagingMiddleware } from '@middleware/pagingMiddleware';
import Joi from '../helpers/validationHelper';
import * as uploadMiddleware from '@middleware/uploadMiddleware';

import { Body, Request, Get, Post, Put, Query, Route, Delete, Tags, Security, Patch, Path } from 'tsoa';
import {
  SuccessResponseModel,
  withSuccess,
  // withPagingSuccess,
} from './models/BaseResponseModel';
import * as express from 'express';
import {
  UserWithPasswordModel,
  UserLoginParams,
  UserRegisterParams,
  UserUpdateParams,
} from './models/UserRequestModel';
// import { AuthorizedUser, MulterRequest } from '@commons/types';
import * as userService from '@services/user.service';

const db = require('@models');
const { sequelize, Sequelize, User } = db.default;
const { Op } = Sequelize;

@Route('users')
@Tags('users')
export class UsersController extends ApplicationController {
  constructor() {
    super('User');
  }

  @Post('/register')
  public async register(@Request() request: any) {
    await uploadMiddleware.handleSingleFile(request, 'profile_picture', PRODUCT_MEDIA_TYPE.IMAGE);

    const registerUser: UserRegisterParams = {
      email: request.body.email,
      name: request.body.name,
      password: request.body.password,
    };

    if (request.body.role) registerUser.role = request.body.role;

    if (request.body.phone) registerUser.phone = request.body.phone;

    console.log(request.file);

    if (request.file) {
      const destination = request.file.destination.replace('\\', '/');
      const filename = request.file.filename;
      const filePath = `/${destination}/${filename}`;
      registerUser.profile_picture = filePath;
    }

    console.log(registerUser);

    return await userService.register(registerUser);
  }

  @Post('/login')
  public async login(@Body() userLoginParams: UserLoginParams) {
    return await userService.login(userLoginParams);
  }

  @Put('/update')
  @Security('jwt')
  public async update(@Request() request: any) {
    await uploadMiddleware.handleSingleFile(request, 'profile_picture', PRODUCT_MEDIA_TYPE.IMAGE);

    const updateUser: UserUpdateParams = {
      name: request.body.name,
      email: request.body.email,
    };

    const userId = request.user.data.id;

    if (request.body.role) updateUser.role = request.body.role;

    if (request.body.phone) updateUser.phone = request.body.phone;

    if (request.file) {
      updateUser.profile_picture = `/${request.file.destination.replace('\\', '/')}/${request.file.filename}`;
    }

    return await userService.update(userId, updateUser);
  }

  @Delete('/{userId}')
  @Security('jwt', ['admin'])
  public async deleteUser(@Path() userId: string) {
    return await userService.deleteUser(userId);
  }

  @Get('/allUsers')
  @Security('jwt', ['admin'])
  public async getAllUsers(@Request() request: any) {
    const { page, limit } = handlePagingMiddleware(request);
    return await userService.getAllUsers(page, limit);
  }
}
