import { IS_ACTIVE, apiCode, AppError, PRODUCT_MEDIA_TYPE } from '@commons/constant';
import { ApplicationController } from '.';
import { handlePagingMiddleware } from '@middleware/pagingMiddleware';
import Joi from '../helpers/validationHelper';
import * as uploadMiddleware from '@middleware/uploadMiddleware';

import { Body, Request, Get, Post, Put, Query, Route, Delete, Tags, Security, Path, FormField } from 'tsoa';
import {
  SuccessResponseModel,
  withSuccess,
  // withPagingSuccess,
} from './models/BaseResponseModel';
import * as express from 'express';
import { CreateFoodParams, UpdateFoodParams } from './models/FoodRequestModel';
import * as foodService from '@services/food.service';

const db = require('@models');
const { sequelize, Sequelize, User } = db.default;

@Route('foods')
@Tags('foods')
export class FoodsController extends ApplicationController {
  constructor() {
    super('Food');
  }

  @Get()
  @Security('jwt', ['supplier'])
  public async getMyFoods(@Request() request: any) {
    const userId = request.user.data.id;
    const { limit, page } = handlePagingMiddleware(request);
    return foodService.getMyFoods(userId, limit, page);
  }

  @Post()
  @Security('jwt', ['supplier'])
  public async createFood(@Request() request: any) {
    await uploadMiddleware.handleFiles(request, 'food_image', PRODUCT_MEDIA_TYPE.IMAGE);

    let food: CreateFoodParams = {
      name: request.body.name,
      desc: request.body.desc,
      stock: request.body.stock,
      price: request.body.price,
    };

    let userId = request.user.data.id;
    let foodImages: string[] = [];

    if (request.files) {
      foodImages = request.files.map((file) => `/${file.destination.replace('\\', '/')}/${file.filename}`);
    }

    return foodService.createFood(food, userId, foodImages);
  }

  @Get('{foodId}')
  public async getFood(@Path() foodId: number, @Request() request: any) {
    console.log(`Food id is ${foodId}`);
    const { limit, page } = handlePagingMiddleware(request);
    return foodService.getFood(foodId, limit, page);
  }

  @Put('{foodId}')
  @Security('jwt', ['supplier'])
  public async updateFood(@Request() request: any, @Path() foodId: number) {
    await uploadMiddleware.handleFiles(request, 'food_image', PRODUCT_MEDIA_TYPE.IMAGE);

    let food: UpdateFoodParams = {
      name: request.body.name,
      desc: request.body.desc,
      stock: request.body.stock,
      price: request.body.price,
    };

    console.log(food);

    let userId = request.user.data.id;
    let foodImages: string[] = [];

    if (request.files) {
      foodImages = request.files.map((file) => file.path);
    }

    return foodService.updateFood(foodId, food, userId, foodImages);
  }

  @Delete('{foodId}')
  @Security('jwt', ['supplier'])
  public async deleteFood(@Path() foodId: number, @Request() request: any) {
    let userId = request.user.data.id;
    return await foodService.deleteFood(foodId, userId);
  }

  @Get('/users/{userId}')
  public async getFoodsByUser(@Path() userId: string, @Request() request: any) {
    const { limit, page } = handlePagingMiddleware(request);
    return foodService.getFoodsByUser(userId, limit, page);
  }
}
