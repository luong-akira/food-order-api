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
import * as orderService from '@services/order.service';

@Route('orders')
@Tags('order')
export class OrdersController extends ApplicationController {
  constructor() {
    super('Order');
  }

  @Post('{foodId}')
  @Security('jwt')
  public async createOrder(@Request() request: any, @Path() foodId: number) {
    const userId = request.user.data.id;
    const quantity = request.body.quantity;
    return await orderService.createOrder(foodId, userId, quantity);
  }

  @Delete('/orders/{orderId}')
  @Security('jwt')
  public async abortOrder(@Path() orderId: number) {}
}
