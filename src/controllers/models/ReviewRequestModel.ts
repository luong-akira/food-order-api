import Joi = require("joi");

export interface ReviewRequestParams{
    title:string;
    rating:number;
    content:string;
}

export const CreateReviewSchema = Joi.object({
    title:Joi.string().required().min(3),
    rating:Joi.number().required().min(1).max(5),
    content:Joi.string().required().min(3)
})