import { Body, Delete, Get, Path, Post, Put, Route, Security, Tags } from 'tsoa';
import { CreateCategoryParams, UpdateCategoryParams } from './models/CategoryRequestModel';
import ApplicationController from './_application.controller';
import * as categoryService from '@services/categoriy.service';

@Route('categories')
@Tags('categories')
export class CategoriesController extends ApplicationController {
  constructor() {
    super('Category');
  }

  @Get()
  public async getAllCategories() {
    return categoryService.getAllCategories();
  }

  @Post()
  @Security('jwt', ['admin'])
  public async createCategory(@Body() createCategoryParams: CreateCategoryParams) {
    return categoryService.createCategory(createCategoryParams);
  }

  @Put('{categoryId}')
  @Security('jwt', ['admin'])
  public async updateCategory(@Body() updateCategoryParams: UpdateCategoryParams, @Path() categoryId: number) {
    return categoryService.updateCategory(updateCategoryParams, categoryId);
  }

  @Delete('{categoryId}')
  @Security('jwt', ['admin'])
  public async deleteCategory(@Path() categoryId: number) {
    return categoryService.deleteCategory(categoryId);
  }
}
