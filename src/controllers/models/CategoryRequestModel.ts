import Joi = require('joi');

export interface CreateCategoryParams {
  name: string;
}

export interface UpdateCategoryParams {
  name: string;
}

export const CreateCategorySchema = Joi.object({
  name: Joi.string().required().min(3),
});

export const UpdateCategorySchema = Joi.object({
  name: Joi.string().required().min(3),
});
