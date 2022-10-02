import { Body, Delete, Path, Post, Put, Request, Route, Security, Tags } from "tsoa";
import ApplicationController from "./_application.controller";
import * as reviewService from '@services/review.service'
import { ReviewRequestParams } from "./models/ReviewRequestModel";
import { request } from "express";

@Route("reviews")
@Tags("review")
export class ReviewsController extends ApplicationController{
    constructor(){
        super('Review')
    }

    @Post('{foodId}')
    @Security('jwt')
    public async createReview(@Request() request:any,@Path() foodId:number){
        const userId = request.user.data.id;
        
        const review : ReviewRequestParams = {
            title:request.body.title,
            rating:request.body.rating,
            content:request.body.content
        }

        return reviewService.createReview(userId,foodId,review)
    }

    @Put('{foodId}/{reviewId}')
    @Security('jwt')
    public async updateReview(@Path("foodId") foodId:number,@Path("reviewId") reviewId:number,@Request() request:any){
        
    }

    @Delete('{foodId}/{reviewId}')
    @Security('jwt')
    public async deleteReview(@Path("foodId") foodId:number,@Path("reviewId") reviewId:number,@Request() request:any){
        const userId = request.user.data.id;

        return reviewService.deleteReview(userId,foodId,reviewId);
    }
}