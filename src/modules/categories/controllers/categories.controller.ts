import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll() {
    const categories = await this.categoriesService.findAllCategories();
    return categories;
  }

  @Get(':keyword')
  async findByKeyword(@Param('keyword') keyword: string) {
    const category = await this.categoriesService.findOneCategory(keyword);
    return category;
  }

  @Post()
  async create(@Body() categoryDTO: CreateCategoryDto) {
    const categoryCreated =
      await this.categoriesService.createCategory(categoryDTO);
    return categoryCreated;
  }

  @Put(':keyword')
  async update(
    @Param('keyword') keyword: string,
    @Body() categoryDTO: UpdateCategoryDto,
  ) {
    const updatedCategory = await this.categoriesService.updateCategory(
      keyword,
      categoryDTO,
    );
    return updatedCategory;
  }

  @Delete(':keyword')
  async delete(@Param('keyword') keyword: string) {
    await this.categoriesService.deleteCategory(keyword);
  }
}
