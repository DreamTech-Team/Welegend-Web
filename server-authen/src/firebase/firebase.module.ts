/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccountKey from './serviceAccountKey.json';

@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useFactory: () => {
        
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccountKey as admin.ServiceAccount),
          databaseURL: 'https://welegend.firebaseio.com',
        });
        return admin;
      },
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseModule {
  public verifyFirebaseToken(firebaseToken: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(firebaseToken);
  }
}
