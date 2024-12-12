import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../modules/users/users.module';
import { PromotionsModule } from 'src/modules/promotions/promotions.module';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { StoreModule } from 'src/modules/store/store.module';
import { rolesProviders } from 'src/common/guards/roles/roles.providers';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PromotionsModule,
    CategoriesModule,
    StoreModule,
  ],
  controllers: [],
  providers: [...rolesProviders],
})
export class AppModule {}
