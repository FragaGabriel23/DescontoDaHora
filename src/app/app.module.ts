import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../modules/users/users.module';
import { PromotionsModule } from 'src/modules/promotions/promotions.module';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { StoreModule } from 'src/modules/store/store.module';
import { rolesProviders } from 'src/common/guards/roles/roles.providers';
import { PreauthMiddleware } from 'src/middlewares/auth/firebase/preauth/preauth.middleware';
import { FirebaseModule } from 'src/modules/firebase/firebase.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PromotionsModule,
    CategoriesModule,
    StoreModule,
    FirebaseModule,
  ],
  controllers: [],
  providers: [...rolesProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreauthMiddleware).exclude().forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
