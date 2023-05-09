import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data-storage/data.service';
import { ExpensesDataService } from '../services/expenses/expenses-data.service';
import { SalaryDataService } from '../services/salary/salary-data.service';

import { LocalNotifications } from '@capacitor/local-notifications';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../services/notifications/notifications.service';

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
    notifyInSeconds: new FormControl('', [Validators.required]),
  });

  constructor(private notificationsService: NotificationsService) {
    console.log('constr 3');
  }

  async ngOnInit() {
    await this.notificationsService.requestPermissions();
  }

  async notifyBasic() {
    this.notificationsService.scheduleNow();
  }

  async notifyAdvance() {
    const seconds = this.testForm.get('notifyInSeconds')!.value;
    this.notificationsService.scheduleAt(seconds);
  }
}
