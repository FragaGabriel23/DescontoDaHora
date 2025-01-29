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
import { Roles } from 'src/common/decorators/roles/roles.decorator';
import { Role } from 'src/common/enums/roles/role.enum';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Roles(Role.Admin, Role.Guest, Role.Store, Role.User)
  @Get()
  async findAll() {
    const categories = await this.categoriesService.findAllCategories();
    return categories;
  }

  @Roles(Role.Admin, Role.Guest, Role.Store, Role.User)
  @Get(':keyword')
  async findByKeyword(@Param('keyword') keyword: string) {
    const category = await this.categoriesService.findOneCategory(keyword);
    return category;
  }

  @Roles(Role.Admin)
  @Post()
  async create(@Body() categoryDTO: CreateCategoryDto) {
    const categoryCreated =
      await this.categoriesService.createCategory(categoryDTO);
    return categoryCreated;
  }

  @Roles(Role.Admin)
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

  @Roles(Role.Admin)
  @Delete(':keyword')
  async delete(@Param('keyword') keyword: string) {
    await this.categoriesService.deleteCategory(keyword);
  }
}
