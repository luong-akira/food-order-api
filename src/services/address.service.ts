const db = require('@models');
const { sequelize, Sequelize, User, Food, Address } = db.default;
import { AddressesController } from '@controllers/address.controller';
import { FoodsController } from '@controllers/foods.controller';
import {
  BasicCreateAddressSchema,
  BasicUpdateAddressSchema,
  CreateAddressParams,
  UpdateAddressParams,
} from '@controllers/models/AddressRequestModel';
import {
  CreateFoodParams,
  CreateFoodSchema,
  UpdateFoodParams,
  UpdateFoodSchema,
} from '@controllers/models/FoodRequestModel';
import { OrdersController } from '@controllers/orders.controller';
import Joi = require('joi');
import { add } from 'lodash';

export async function getAddresses(userId: string, limit: number, page: number) {
  const addressCount = await Address.count({
    where: {
      UserId: userId,
    },
  });

  const totalPage = Math.ceil(addressCount / limit);

  const addresses = await Address.findAll({
    limit,
    offset: (page - 1) * limit,
  });

  if (!addresses) throw new Error('Address not found');

  return { data: addresses, limit, page, totalPage };
}

export async function createAddress(createAddress: CreateAddressParams, userId: string) {
  if (BasicCreateAddressSchema.validate(createAddress).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      BasicCreateAddressSchema.validate(createAddress).error.details,
      null,
    );
  }

  const address = await Address.create({
    ...createAddress,
    UserId: userId,
  });

  return address;
}

export async function updateAddress(id: string, updateAddress: UpdateAddressParams, userId: string) {
  if (BasicUpdateAddressSchema.validate(updateAddress).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      BasicUpdateAddressSchema.validate(updateAddress).error.details,
      null,
    );
  }

  const address: any = await Address.findOne({
    where: {
      id,
      UserId: userId,
    },
  });

  if (!address) throw new Error('Address not found');

  address.name = updateAddress.name || address.name;
  address.phone = updateAddress.phone || address.phone;
  address.address = updateAddress.address || address.address;

  await address.save();

  return address;
}

export async function deleteAddress(addressId: string, userId: string) {
  const address: any = await Address.findOne({
    where: {
      id: addressId,
      UserId: userId,
    },
  });

  if (!address) throw new Error('Address not found');

  await address.destroy();

  return { address_id: addressId };
}
