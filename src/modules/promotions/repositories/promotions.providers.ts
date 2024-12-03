import { DataSource } from 'typeorm';
import { Promotions } from '../entities/promotions.entity';

export const promotionsProviders = [
  {
    provide: 'PROMOTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Promotions),
    inject: ['DATA_SOURCE'],
  },
];
