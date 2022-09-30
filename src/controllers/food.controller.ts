import { IS_ACTIVE, apiCode, AppError, PRODUCT_MEDIA_TYPE } from '@commons/constant';
import { ApplicationController } from './';
import { handlePagingMiddleware } from '@middleware/pagingMiddleware';
import Joi from '../helpers/validationHelper';
import * as uploadMiddleware from '@middleware/uploadMiddleware';

import { Body, Request, Get, Post, Put, Query, Route, Delete, Tags, Security, Patch } from 'tsoa';
import {
  SuccessResponseModel,
  withSuccess,
  // withPagingSuccess,
} from './models/BaseResponseModel';
import * as express from 'express';
import { CreateFoodParams } from './models/FoodRequestModel';
import * as foodService from '@services/food.service';

const db = require('@models');
const { sequelize, Sequelize, User } = db.default;

@Route('foods')
@Tags('food')
export class UsersController extends ApplicationController {
  constructor() {
    super('Food');
  }

  @Post()
  public async createFood(@Body() createFoodParams: CreateFoodParams) {
    return foodService.createFood(createFoodParams);
  }

  @Put('{foodId}')
  public async updateFood() {}

  @Delete('{foodId}')
  public async deleteFood() {}

  @Get()
  public async getFoods() {}

  @Get('{foodId}')
  public async getFood() {}
}
