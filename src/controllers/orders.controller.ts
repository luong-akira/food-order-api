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


import * as orderService from '@services/order.service';
import { OrderFoodRequest } from './models/OrderRequestModel';

@Route('orders')
@Tags('order')
export class OrdersController extends ApplicationController {
  constructor() {
    super('Order');
  }

  @Post()
  @Security('jwt')
  public async createOrder(@Request() request: any) {
    const userId = request.user.data.id;
    const addressId = request.body.addressId;
    if(!addressId) throw new Error("Please choose an address")
    const foods = request.body.foods;
    return orderService.createOrder(foods, userId,addressId);
  }

  @Delete('/{orderDetailsId}')
  @Security('jwt')
  public async abortOrder(@Path() orderDetailsId: string,@Request() request: any) {
    const userId = request.user.data.id;
    return orderService.abortOrder(orderDetailsId,userId)
  }
}
