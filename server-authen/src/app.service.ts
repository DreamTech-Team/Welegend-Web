/* eslint-disable prettier/prettier */

import { Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AppService {
  constructor(
    @Inject('FIREBASE_ADMIN') private readonly firebaseAdmin: admin.app.App,
  ) {}

  async getData() {
    const db = this.firebaseAdmin.database();
    const ref = db.ref('restricted_access/secret_document');
    const snapshot = await ref.once('value');
    return snapshot.val();
  }
}
