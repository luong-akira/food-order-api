import { CreateReviewSchema, ReviewRequestParams } from "@controllers/models/ReviewRequestModel";
import Joi = require("joi");
import { Op } from "sequelize";
const db = require("@models");
const {Review,User,Food} = db.default;

export async function createReview(userId:string,foodId:number,reviewParams:ReviewRequestParams){
    const food = await Food.findOne({
        where:{
            id:foodId,
            UserId:{
                [Op.ne]:userId
            }
        }
    })

    if(!food) throw new Error("Food not found");

    if(CreateReviewSchema.validate(reviewParams).error) throw new Joi.ValidationError("Validation Error",CreateReviewSchema.validate(reviewParams).error.details,null)
    
    const review = await Review.create({
        ...reviewParams,
        UserId:userId,
        FoodId:foodId
    })

    return review;
}

export async function deleteReview(userId:string,foodId:number,reviewId:number){
    const review = await Review.findOne({
        where:{
            id:reviewId,
            UserId:userId,
            FoodId:foodId
        }
    })

    if(!review) throw new Error("Review is not found");

    await review.destroy();

    return {id:review.id}
}

export async function updateReview(){
    
}