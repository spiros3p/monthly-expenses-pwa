import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';
import { ExpensesDataService } from '../services/expenses/expenses-data.service';
import { SalaryDataService } from '../services/salary/salary-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  listData: unknown[] = [];
  listData2 = [];
  salarySet = new BehaviorSubject(true);

  constructor(
  ) {
  }

}
