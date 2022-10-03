import { IS_ACTIVE, apiCode, AppError, PRODUCT_MEDIA_TYPE } from '@commons/constant';
import { ApplicationController } from '.';
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
import * as addressService from '@services/address.service';

const db = require('@models');
const { sequelize, Sequelize, User } = db.default;
const { Op } = Sequelize;

import axios from 'axios';
import { CreateAddressParams, UpdateAddressParams } from './models/AddressRequestModel';

// interface MulterRequest extends express.Request {
//   file: any;
// }

@Route('addresses')
@Tags('addresses')
export class AddressesController extends ApplicationController {
  constructor() {
    super('Address');
  }

  @Get()
  @Security('jwt')
  public async getAddresses(@Request() request: any) {
    const userId = request.user.data.id;
    const { limit, page } = handlePagingMiddleware(request);
    return addressService.getAddresses(userId, limit, page);
  }

  @Post()
  @Security('jwt')
  public async createAddress(@Body() createAddress: CreateAddressParams, @Request() request: any) {
    const userId = request.user.data.id;
    console.log(userId);
    console.log(request.body);
    return addressService.createAddress(createAddress, userId);
  }

  @Put('{addressId}')
  @Security('jwt')
  public async updateAddress(
    @Path() addressId: string,
    @Body() updateAddressParams: UpdateAddressParams,
    @Request() request: any,
  ) {
    const userId = request.user.data.id;
    return addressService.updateAddress(addressId, updateAddressParams, userId);
  }

  @Delete('{addressId}')
  @Security('jwt')
  public async deleteAddress(@Path() addressId: string, @Request() request: any) {
    const userId = request.user.data.id;
    return addressService.deleteAddress(addressId, userId);
  }
}
