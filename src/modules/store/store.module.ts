import { Module } from '@nestjs/common';
import { StoreService } from './services/store.service';
import { StoreController } from './controllers/store.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { storeProviders } from './repositories/store.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [StoreController],
  providers: [StoreService, ...storeProviders],
})
export class StoreModule {}
