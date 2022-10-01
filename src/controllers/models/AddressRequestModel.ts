import Joi = require('joi');

export interface CreateAddressParams {
  name: string;
  phone: number;
  address: string;
}

export interface UpdateAddressParams {
  name?: string;
  phone?: number;
  address?: string;
}

export const BasicCreateAddressSchema = Joi.object({
  name: Joi.string().required().min(3),
  phone: Joi.number().required().min(5),
  address: Joi.string().required().min(3),
});

export const BasicUpdateAddressSchema = Joi.object({
  name: Joi.string().optional().min(3),
  phone: Joi.number().optional().min(5),
  address: Joi.string().optional().min(3),
});
