import {
  CreateReviewSchema,
  CreateReviewParams,
  UpdateReviewParams,
  UpdateReviewSchema,
} from '@controllers/models/ReviewRequestModel';
import ExpressValidator = require('express-validator');
import Joi = require('joi');
import { Op } from 'sequelize';
const db = require('@models');
const { Review, User, Food } = db.default;

export async function createReview(userId: string, foodId: number, reviewParams: CreateReviewParams) {
  const food = await Food.findOne({
    where: {
      id: foodId,
      UserId: {
        [Op.ne]: userId,
      },
    },
  });

  if (!food) throw new Error('Food not found');

  if (CreateReviewSchema.validate(reviewParams).error)
    throw new Joi.ValidationError('Validation Error', CreateReviewSchema.validate(reviewParams).error.details, null);

  const review = await Review.create({
    ...reviewParams,
    UserId: userId,
    FoodId: foodId,
  });

  return review;
}

export async function deleteReview(userId: string, foodId: number, reviewId: number) {
  const review = await Review.findOne({
    where: {
      id: reviewId,
      UserId: userId,
      FoodId: foodId,
    },
  });

  if (!review) throw new Error('Review is not found');

  await review.destroy();

  return { id: review.id };
}

export async function updateReview(
  userId: string,
  foodId: number,
  reviewId: number,
  updateReviewParams: UpdateReviewParams,
) {
  const review: any = await Review.findOne({
    where: {
      id: reviewId,
      FoodId: foodId,
      UserId: userId,
    },
  });

  if (!review) throw new Error('Review not found');

  if (UpdateReviewSchema.validate(updateReviewParams).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      UpdateReviewSchema.validate(updateReviewParams).error.details,
      null,
    );
  }

  review.title = updateReviewParams.title || review.title;
  review.rating = updateReviewParams.rating || review.rating;
  review.content = updateReviewParams.content || review.content;

  await review.update({
    title: review.title,
    rating: review.rating,
    content: review.content,
  });

  await review.save();

  return review;
}
