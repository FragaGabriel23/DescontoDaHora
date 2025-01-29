import { App, initializeApp, cert } from 'firebase-admin/app';
import * as serviceAccount from './../../../config/firebase/firebaseServiceAccount.json';

const firebaseParams = {
  projectId: serviceAccount.project_id,
  clientEmail: serviceAccount.client_email,
  privateKey: serviceAccount.private_key,
};

export const initializeFirebaseApp = async (): Promise<App> => {
  return initializeApp({
    credential: cert(firebaseParams),
  });
};
