import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { DatabaseModule } from 'src/core/database/database.module';
import { categoriesProviders } from './repositories/categories.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, ...categoriesProviders],
})
export class CategoriesModule {}
