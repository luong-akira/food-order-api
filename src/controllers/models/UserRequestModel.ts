import Joi = require('joi');
// import { IS_ACTIVE, apiCode} from '@commons/constant';

export interface UserRequestModel {
  user_name: string;
}

export interface UserWithPasswordModel extends UserRequestModel {
  password: string;
}
export interface UserLoginParams {
  user_name: string;
  password: string;
}

export interface UserRegisterParams {
  name: string;
  user_name: string;
  password: string;
  role?: string;
  profile_picture?: string;
}

export const BasicLoginUserSchema = Joi.object({
  user_name: Joi.string().required().min(3),
  password: Joi.string().trim().required().min(3),
});

export const BasicRegisterUserSchema = Joi.object({
  name: Joi.string().required().min(3),
  user_name: Joi.string().required().min(3),
  password: Joi.string().trim().required().min(3),
  role: Joi.string().optional(),
  profile_picture: Joi.string().optional(),
});
