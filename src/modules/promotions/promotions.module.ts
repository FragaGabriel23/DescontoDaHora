import { Module } from '@nestjs/common';
import { PromotionsController } from './controllers/promotions.controller';
import { PromotionsService } from './services/promotions.service';
import { DatabaseModule } from 'src/core/database/database.module';
import { promotionsProviders } from './repositories/promotions.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PromotionsController],
  providers: [PromotionsService, ...promotionsProviders],
})
export class PromotionsModule {}
