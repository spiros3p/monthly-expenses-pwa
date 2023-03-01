import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, filter, from, of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  storageReady = new BehaviorSubject(false);

  constructor(public storage: Storage) {
    this.init();
  }

  async init() {
    console.log('INIT');
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    console.log('DONE');
    this.storageReady.next(true);
  }


}
