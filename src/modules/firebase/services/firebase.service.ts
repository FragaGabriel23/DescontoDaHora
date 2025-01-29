import { Inject, Injectable } from '@nestjs/common';
import { App } from 'firebase-admin/app';
import { DecodedIdToken, getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseService {
  constructor(@Inject('FIREBASE_ADMIN') private readonly firebaseApp: App) {}

  async verifyToken(token: string): Promise<DecodedIdToken> {
    return getAuth().verifyIdToken(token);
  }
}
