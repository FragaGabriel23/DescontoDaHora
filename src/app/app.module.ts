import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../modules/users/users.module';
import { PromotionsModule } from 'src/modules/promotions/promotions.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PromotionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
