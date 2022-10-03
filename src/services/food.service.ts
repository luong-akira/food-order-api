const db = require('@models');
const { sequelize, Sequelize, User, Food, FoodImage, Review } = db.default;
import { FoodsController } from '@controllers/foods.controller';
import {
  CreateFoodParams,
  CreateFoodSchema,
  UpdateFoodParams,
  UpdateFoodSchema,
} from '@controllers/models/FoodRequestModel';
import { OrdersController } from '@controllers/orders.controller';
import Joi = require('joi');

export async function createFood(createFoodParams: CreateFoodParams, userId: string, foodImages?: string[]) {
  if (CreateFoodSchema.validate(createFoodParams).error) {
    throw new Joi.ValidationError('Validation Error', CreateFoodSchema.validate(createFoodParams).error.details, null);
  }

  console.log(createFoodParams);

  const food = await Food.create({
    name: createFoodParams.name,
    desc: createFoodParams.desc,
    stock: createFoodParams.stock,
    price: createFoodParams.price,
    UserId: userId,
  });

  if (foodImages && foodImages.length > 0) {
    foodImages.forEach(async (image) => {
      await FoodImage.create({
        image,
        FoodId: food.id,
      });
    });
  }

  return { message: 'Food create successfully' };
}

export async function getFood(id: number, limit: number, page: number) {
  const food = await Food.findOne({
    where: {
      id,
    },
    include: [
      {
        model: FoodImage,
      },
      {
        model: Review,
        limit,
        offset: (page - 1) * limit,
      },
    ],
  });

  if (!food) throw new Error('Food does not found');

  return food;
}

export async function updateFood(
  id: number,
  updateFoodParams: UpdateFoodParams,
  userId: string,
  foodImages?: string[],
) {
  if (UpdateFoodSchema.validate(updateFoodParams).error) {
    throw new Joi.ValidationError('Validation Error', UpdateFoodSchema.validate(updateFoodParams).error.details, null);
  }

  const food: any = await Food.findOne({
    where: {
      id,
    },
    include: [FoodImage],
  });

  if (!food) throw new Error('Food does not found');

  food.name = updateFoodParams.name || food.name;
  food.desc = updateFoodParams.desc || food.desc;
  food.stock = updateFoodParams.stock || food.stock;
  food.price = updateFoodParams.price || food.price;

  if (foodImages && foodImages.length > 0) {
    foodImages.forEach(async (image) => {
      await FoodImage.create({
        image,
        FoodId: id,
      });
    });
  }

  await food.save();
  return food;
}

export async function deleteFood(id: number, UserId: string) {
  const food = await Food.findOne({
    where: {
      id,
      UserId,
    },
  });

  // console.log(food);

  if (!food) throw new Error('Food does not found');

  await Food.destroy({
    where: {
      id,
      UserId,
    },
    individualHooks: true,
  });

  return 'Delete succesffuly';
}

export async function getFoodsByUser(UserId: string, limit, page) {
  const foodCount = await Food.count({
    where: {
      UserId,
    },
  });

  const totalPage = Math.ceil(foodCount / limit);

  const foods = await Food.findAll({
    where: {
      UserId,
    },
    include: [FoodImage],
    order: [['created_at', 'DESC']],
    limit,
    offset: (page - 1) * limit,
  });

  return { data: foods, limit, totalPage, page };
}
