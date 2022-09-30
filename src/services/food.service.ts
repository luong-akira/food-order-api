const db = require('@models');
const { sequelize, Sequelize, User } = db.default;
import { CreateFoodParams } from '@controllers/models/FoodRequestModel';
import Joi = require('joi');

export async function createFood(createFoodParams: CreateFoodParams) {}
