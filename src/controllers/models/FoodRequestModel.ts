import Joi = require('joi');

export interface CreateFoodParams {
  name: string;
  desc: string;
  stock: number;
  price: number;
}

export interface UpdateFoodParams {
  name?: string;
  desc?: string;
  stock?: number;
  price?: number;
}

export const CreateFoodSchema = Joi.object({
  name: Joi.string().required().min(3),
  desc: Joi.string().required().min(3),
  stock: Joi.number().required(),
  price: Joi.number().required(),
});
