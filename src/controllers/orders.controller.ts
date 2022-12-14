import { IS_ACTIVE, apiCode, AppError, PRODUCT_MEDIA_TYPE } from '@commons/constant';
import { ApplicationController } from './';
import { handlePagingMiddleware } from '@middleware/pagingMiddleware';
import Joi from '../helpers/validationHelper';
import * as uploadMiddleware from '@middleware/uploadMiddleware';

import { Body, Request, Get, Post, Put, Query, Route, Delete, Tags, Security, Patch, Path, Res, Response } from 'tsoa';
import {
  SuccessResponseModel,
  withSuccess,
  // withPagingSuccess,
} from './models/BaseResponseModel';
import * as express from 'express';

import * as orderService from '@services/order.service';
import { OrderFoodRequest } from './models/OrderRequestModel';
const db = require('@models');
const { sequelize, Sequelize, User, Order, Food, OrderDetails } = db.default;

@Route('orders')
@Tags('orders')
export class OrdersController extends ApplicationController {
  constructor() {
    super('Order');
  }

  @Get('myOrders')
  @Security('jwt', ['user'])
  public async getMyOrders(@Request() request: any) {
    const userId = request.user.data.id;
    const { limit, page } = handlePagingMiddleware(request);
    return orderService.getMyOrders(userId, limit, page);
  }

  @Get('orderList')
  @Security('jwt', ['supplier'])
  public async getOrderList(@Request() request: any) {
    const userId = request.user.data.id;
    const { limit, page } = handlePagingMiddleware(request);
    return orderService.getOrderList(userId, limit, page);
  }

  @Get('vnpay_return')
  @Security('jwt',['user'])
  public async vnpayReturn(@Request() req: any) {
    console.log('inside vnpay return');
    const userId = req.user.data.id;
    let value = await orderService.vnpayReturn(req,userId);

    if (value.code == '00') {
      const orderDetails = await OrderDetails.findOne({
        where: {
          id: value.orderId,
        },
      });

      orderDetails.isPaid = true;

      orderDetails.save();
    }
  }

  @Post('create_vnp_paymentUrl/{orderDetailsId}')
  @Security('jwt', ['user'])
  public async createVnpayPaymentUrl(@Request() req: any, @Path() orderDetailsId: string) {
    const userId = req.user.data.id;
    return orderService.createVnpayPaymentUrl(req, userId, orderDetailsId);
  }

  @Post("create_momo_paymentUrl/{orderDetailsId}")
  @Security("jwt",["user"])
  public async createMomoPaymentUrl(@Request() req: any, @Path() orderDetailsId: string){
    const userId = req.user.data.id;
    return orderService.createMomoPaymentUrl(req, userId, orderDetailsId);
  }

  @Post()
  @Security('jwt', ['user'])
  public async createOrder(@Request() request: any) {
    const userId = request.user.data.id;
    const addressId = request.body.addressId;
    if (!addressId) throw new Error('Please choose an address');
    const foods = request.body.foods;
    return orderService.createOrder(foods, userId, addressId);
  }

  @Put('/{orderDetailsId}')
  @Security('jwt', ['supplier'])
  public async setIsDelivered(@Path() orderDetailsId: string, @Request() request: any) {
    const userId = request.user.data.id;
    return orderService.setIsDelivered(orderDetailsId, userId);
  }

  @Delete('/{orderDetailsId}')
  @Security('jwt', ['user'])
  public async abortOrder(@Path() orderDetailsId: string, @Request() request: any) {
    const userId = request.user.data.id;
    return orderService.abortOrder(orderDetailsId, userId);
  }
}
