import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpenseModel } from '../models/Expenses.model';
import { SalaryModel } from '../models/Salary.model';
import { ExpensesDataService } from '../services/expenses/expenses-data.service';
import { SalaryDataService } from '../services/salary/salary-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  expensesData: ExpenseModel[] = [];
  salarySet = new BehaviorSubject(false);
  salaryData!: SalaryModel;

  constructor(
    private expensesDataService: ExpensesDataService,
    private salaryDataService: SalaryDataService
  ) {}

  ngOnInit(): void {
    this.initLoadData();
    this.subscribeToExpensesChanges();
    this.subscribeToSalaryChanges();
  }

  private initLoadData() {
    this.getExpensesData();
    this.getSalaryData();
  }

  private getExpensesData() {
    this.expensesDataService.getData().subscribe((list) => {
      this.resolveExpensesList(list);
    });
  }

  private getSalaryData() {
    this.salaryDataService.getData().subscribe((salary) => {
      this.resolveSalaryInfo(salary);
    });
  }

  private subscribeToExpensesChanges() {
    this.expensesDataService.subscribeToData().subscribe((list) => {
      this.resolveExpensesList(list);
    });
  }

  private subscribeToSalaryChanges() {
    this.salaryDataService.subscribeToSalaryInfo().subscribe((salary) => {
      this.resolveSalaryInfo(salary);
    });
  }

  private resolveExpensesList(list: any) {
    if (list !== null) {
      this.expensesData = list;
    }
  }

  private resolveSalaryInfo(salary: any) {
    if (!(JSON.stringify(salary) === '{}' || salary === null)) {
      this.salaryData = salary as SalaryModel;
      this.salarySet.next(true);
    }
  }
}
