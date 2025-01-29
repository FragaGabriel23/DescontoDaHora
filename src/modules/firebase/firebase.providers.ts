import { initializeFirebaseApp } from './firebase-config';
import { FirebaseService } from './services/firebase.service';

export const firebaseProviders = [
  {
    provide: 'FIREBASE_ADMIN',
    useFactory: async () => {
      return initializeFirebaseApp();
    },
  },
  FirebaseService,
];
