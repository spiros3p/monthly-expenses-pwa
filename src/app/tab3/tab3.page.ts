import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data-storage/data.service';
import { ExpensesDataService } from '../services/expenses/expenses-data.service';
import { SalaryDataService } from '../services/salary/salary-data.service';

import { LocalNotifications } from '@capacitor/local-notifications';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  listData: unknown[] = [];
  listData2 = [];
  salarySet = new BehaviorSubject(true);

  testForm = new FormGroup({
    notifyInSeconds: new FormControl('', [Validators.required])
  })

  index = 0;

  constructor() {
    console.log('constr 3');
  }

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async notifyBasic() {
    try {
      this.index = this.index + 1;
      await LocalNotifications.schedule({
        notifications: [
          {
            id: this.index,
            title: 'hello world',
            body: 'this is it',
            extra: {
              data: 'pass data',
            },
          },
        ],
      });
    } catch (e) {
      console.log(e)
      console.error(e)
    }
  }

  async notifyAdvance() {
    try {
      this.index = this.index + 1;
      const seconds = this.testForm.get('notifyInSeconds')!.value
      if (!seconds) return;

      const date = new Date()
      date.setSeconds(date.getSeconds() + parseInt(seconds))

      await LocalNotifications.schedule({
        notifications: [
          {
            id: this.index,
            schedule: {
              at: date
            },
            title: 'hello world',
            body: 'this is it',
            extra: {
              data: 'pass data',
            },
          },
        ],
      });
    } catch (e) {
      console.log(e)
      console.error(e)
    }
  }
}
