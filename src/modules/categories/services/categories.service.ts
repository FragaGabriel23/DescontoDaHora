import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Categories } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async findAllCategories(): Promise<Categories[]> {
    return this.categoriesRepository.find();
  }

  async findOneCategory(keyword: string): Promise<Categories> {
    const category = await this.categoriesRepository.findOne({
      where: { keyword },
    });
    if (!category) {
      throw new NotFoundException(`Category with id ${keyword} not found`);
    }
    return category;
  }

  async createCategory(categoryDTO: CreateCategoryDto): Promise<Categories> {
    const category = this.categoriesRepository.create(categoryDTO);
    return this.categoriesRepository.save(category);
  }

  async updateCategory(
    keyword: string,
    categoryDTO: UpdateCategoryDto,
  ): Promise<Categories> {
    const category = await this.findOneCategory(keyword);
    const updatedCategory = Object.assign(category, categoryDTO);
    return this.categoriesRepository.save(updatedCategory);
  }

  async deleteCategory(keyword: string): Promise<void> {
    const category = await this.findOneCategory(keyword);
    await this.categoriesRepository.remove(category);
  }
}
