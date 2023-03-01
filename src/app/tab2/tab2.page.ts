import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ExpenseModel, Categories } from '../models/Expenses.model';
import { SalaryModel } from '../models/Salary.model';
import { ExpensesDataService } from '../services/expenses/expenses-data.service';
import { SalaryDataService } from '../services/salary/salary-data.service';
import { ExpenseModalComponent } from './modals/expense-modal/expense-modal.component';
import { SalaryModalComponent } from './modals/salary-modal/salary-modal.component';

const dummyExpense: ExpenseModel = {
  id: '12',
  amount: 35,
  dayOfMonth: 5,
  category: Categories['Bills'],
  description: 'Netflix subscription Netflix subscription',
};

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  listData: ExpenseModel[] = [];
  salarySet = new BehaviorSubject(false);
  salary!: SalaryModel;

  constructor(
    private expensesDataService: ExpensesDataService,
    private salaryDataService: SalaryDataService,
    private modalCtrl: ModalController
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
      this.listData = list;
    }
  }

  private resolveSalaryInfo(salary: any) {
    if (!(JSON.stringify(salary) === '{}' || salary === null)) {
      this.salary = salary as SalaryModel;
      this.salarySet.next(true);
    }
  }

  async openExpenseModal() {
    const modal = await this.modalCtrl.create({
      component: ExpenseModalComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.saveNewExpense(data);
    }
  }

  private saveNewExpense(expense: Omit<ExpenseModel, 'id'>) {
    this.expensesDataService.addData(expense);
  }

  removeItem(id: string) {
    this.expensesDataService.removeData(id);
  }

  async openSalaryModal() {
    const modal = await this.modalCtrl.create({
      component: SalaryModalComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.saveSalaryInfo(data);
    }
  }

  private saveSalaryInfo(data: Omit<SalaryModel, 'id'>) {
    this.salaryDataService.registerSalary(data);
  }
}
