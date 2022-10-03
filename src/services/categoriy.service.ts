import { CATEGORY_STATUS } from '@commons/constant';
import {
  CreateCategoryParams,
  CreateCategorySchema,
  UpdateCategoryParams,
  UpdateCategorySchema,
} from '@controllers/models/CategoryRequestModel';
import Joi = require('joi');

const db = require('@models');
const { Category } = db.default;

export async function getAllCategories() {
  const categories = await Category.findAll();
  return categories;
}

export async function createCategory(createCategoryParams: CreateCategoryParams) {
  if (CreateCategorySchema.validate(createCategoryParams).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      CreateCategorySchema.validate(createCategoryParams).error.details,
      null,
    );
  }

  const category = await Category.create({
    name: createCategory.name,
  });

  return category;
}

export async function updateCategory(updateCategoryParams: UpdateCategoryParams, categoryId: number) {
  const category = await Category.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!category) throw new Error('Category not found');

  if (UpdateCategorySchema.validate(updateCategoryParams).error) {
    throw new Joi.ValidationError(
      'Validation Error',
      CreateCategorySchema.validate(updateCategoryParams).error.details,
      null,
    );
  }

  await category.update({
    name: updateCategoryParams.name,
  });

  await category.save();

  return category;
}

export async function deleteCategory(categoryId: number) {
  const category = await Category.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!category) throw new Error('Category not found');

  await category.destroy();

  return { id: categoryId };
}
