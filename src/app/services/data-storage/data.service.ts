import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  storageReady = new BehaviorSubject(false);

  constructor(public storage: Storage) {
    this.init();
  }

  async init() {
    console.log('Init storage...');
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    console.log('Storage Ready!');
    this.storageReady.next(true);
  }
}
