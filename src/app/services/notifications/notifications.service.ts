import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notificationsList = [];
  tempIndex = 0;

  constructor() {}

  async requestPermissions() {
    try {
      console.log(await LocalNotifications.checkPermissions());
      await LocalNotifications.requestPermissions();
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  }

  async scheduleAt(seconds: string | null) {
    try {
      this.tempIndex = this.tempIndex + 1;

      if (!seconds) return;

      const date = new Date();
      date.setSeconds(date.getSeconds() + parseInt(seconds));

      await LocalNotifications.schedule({
        notifications: [
          {
            id: this.tempIndex,
            schedule: {
              at: date,
            },
            title: 'hello world',
            body: 'this is it ADVANCED',
            extra: {
              data: `hit after ${seconds} seconds`,
            },
          },
        ],
      });
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  }

  async scheduleNow() {
    try {
      this.tempIndex = this.tempIndex + 1;
      await LocalNotifications.schedule({
        notifications: [
          {
            id: this.tempIndex,
            title: 'hello world',
            body: 'this is it',
            extra: {
              data: 'pass data',
            },
          },
        ],
      });
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  }
}
