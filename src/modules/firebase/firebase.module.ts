import { Global, Module } from '@nestjs/common';
import { FirebaseController } from './controllers/firebase.controller';
import { firebaseProviders } from './firebase.providers';
import { FirebaseService } from './services/firebase.service';

@Global()
@Module({
  controllers: [FirebaseController],
  providers: [...firebaseProviders],
  exports: ['FIREBASE_ADMIN', FirebaseService],
})
export class FirebaseModule {}
