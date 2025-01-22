import { app, credential, initializeApp } from 'firebase-admin';
import path from 'path';

export const initializeFirebaseApp = async (): Promise<app.App> => {
  const credentialsPath = process.env.FIREBASE_ADMIN_CREDENTIALS_PATH;

  if (!credentialsPath) {
    throw new Error('FIREBASE_ADMIN_CREDENTIALS_PATH not set in .env file.');
  }

  const resolvedPath = path.resolve(credentialsPath);

  const firebaseCredentials = await import(resolvedPath);

  return initializeApp({
    credential: credential.cert(firebaseCredentials),
  });
};
