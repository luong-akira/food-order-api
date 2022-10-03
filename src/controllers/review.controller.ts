import { Body, Delete, Path, Post, Put, Request, Route, Security, Tags } from 'tsoa';
import ApplicationController from './_application.controller';
import * as reviewService from '@services/review.service';
import { CreateReviewParams, UpdateReviewParams } from './models/ReviewRequestModel';
import * as express from 'express';

@Route('reviews')
@Tags('reviews')
export class ReviewsController extends ApplicationController {
  constructor() {
    super('Review');
  }

  @Post('{foodId}')
  @Security('jwt', ['user'])
  public async createReview(@Request() request: any, @Path() foodId: number, @Body() review: CreateReviewParams) {
    const userId = request.user.data.id;

    return reviewService.createReview(userId, foodId, review);
  }

  @Put('{foodId}/{reviewId}')
  @Security('jwt', ['user'])
  public async updateReview(
    @Path('foodId') foodId: number,
    @Path('reviewId') reviewId: number,
    @Request() request: any,
    @Body() updateReviewParams: UpdateReviewParams,
  ) {
    const userId = request.user.data.id;

    return reviewService.updateReview(userId, foodId, reviewId, updateReviewParams);
  }

  @Delete('{foodId}/{reviewId}')
  @Security('jwt', ['user'])
  public async deleteReview(
    @Path('foodId') foodId: number,
    @Path('reviewId') reviewId: number,
    @Request() request: any,
  ) {
    const userId = request.user.data.id;

    return reviewService.deleteReview(userId, foodId, reviewId);
  }
}
