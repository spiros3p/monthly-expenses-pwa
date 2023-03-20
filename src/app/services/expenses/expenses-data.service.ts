import { Injectable } from '@angular/core';
import { filter, from, Observable, of, Subject, switchMap } from 'rxjs';
import { DataService } from '../data-storage/data.service';
import { ExpenseModel } from 'src/app/models/Expenses.model';
import { v4 as uuidv4 } from 'uuid';

const KEY = 'expensesTable';

@Injectable({
  providedIn: 'root',
})
export class ExpensesDataService {
  data = new Subject<ExpenseModel[]>();

  constructor(private dataService: DataService) {}

  getData() {
    return this.dataService.storageReady.pipe(
      filter((ready) => ready),
      switchMap((_) => {
        return from(this.dataService.storage.get(KEY)) ?? of([]);
      })
    );
  }

  subscribeToData() {
    return this.data.asObservable();
  }

  updetaData(newData: ExpenseModel[]) {
    this.data.next(newData);
  }

  async addData(expense: Omit<ExpenseModel, 'id'>) {
    const newExpense: ExpenseModel = { ...expense, id: uuidv4() };
    const storedData = (await this.dataService.storage.get(KEY)) || [];
    storedData.push(newExpense);
    await this.dataService.storage.set(KEY, storedData);
    this.updetaData(storedData);
  }

  async removeData(id: string) {
    const storedData = (await this.dataService.storage.get(KEY)) || [];
    const index = storedData.findIndex(
      (expense: ExpenseModel) => (expense.id = id)
    );
    storedData.splice(index, 1);
    await this.dataService.storage.set(KEY, storedData);
    this.updetaData(storedData);
  }
}
