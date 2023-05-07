import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data-storage/data.service';
import { ExpensesDataService } from '../services/expenses/expenses-data.service';
import { SalaryDataService } from '../services/salary/salary-data.service';

import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  listData: unknown[] = [];
  listData2 = [];
  salarySet = new BehaviorSubject(true);

  index = 0;

  constructor() {
    console.log('constr 3');
  }

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async notifyBasic() {
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
  }

  async notifyAdvance() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 0,
          schedule: {
            every: 'month'
          },
          title: 'hello world',
          body: 'this is it',
          extra: {
            data: 'pass data',
          },
        },
      ],
    });
  }
}
