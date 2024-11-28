import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../modules/users/users.module';
import { PromotionsModule } from 'src/modules/promotions/promotions.module';
import { CategoriesModule } from 'src/modules/categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PromotionsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
