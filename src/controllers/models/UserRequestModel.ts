import Joi = require('joi');

export interface UserRequestModel {
  user_name: string;
}

export interface UserWithPasswordModel extends UserRequestModel {
  password: string;
}
export interface UserLoginParams {
  email: string;
  password: string;
}

export interface UserRegisterParams {
  email: string;
  name: string;
  password: string;
  role?: string;
  profile_picture?: string;
  phone?: number;
}

export interface UserUpdateParams {
  name?: string;
  role?: string;
  profile_picture?: string;
  email?: string;
  phone?: number;
}

export const BasicLoginUserSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().trim().required().min(3),
});

export const BasicRegisterUserSchema = Joi.object({
  email: Joi.string().required().email(),
  name: Joi.string().required().min(3),
  password: Joi.string().trim().required().min(3),
  role: Joi.string().optional(),
  profile_picture: Joi.string().optional(),
  phone: Joi.number().optional(),
});

export const BasicUpdateUserSchema = Joi.object({
  name: Joi.string().optional().min(3),
  email: Joi.string().required().email(),
  role: Joi.string().optional(),
  profile_picture: Joi.string().optional(),
  phone: Joi.number().optional(),
});
