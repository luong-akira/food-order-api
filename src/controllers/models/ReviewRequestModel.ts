import Joi = require('joi');

export interface CreateReviewParams {
  title: string;
  rating: number;
  content: string;
}

export interface UpdateReviewParams {
  title?: string;
  rating?: number;
  content?: string;
}

export const CreateReviewSchema = Joi.object({
  title: Joi.string().required().min(3),
  rating: Joi.number().required().min(1).max(5),
  content: Joi.string().required().min(3),
});

export const UpdateReviewSchema = Joi.object({
  title: Joi.string().optional().min(3),
  rating: Joi.number().optional().min(1).max(5),
  content: Joi.string().optional().min(3),
});
