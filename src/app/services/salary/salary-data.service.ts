import { Injectable } from '@angular/core';
import { filter, from, Observable, of, Subject, switchMap } from 'rxjs';
import { DataService } from '../data.service';
import { SalaryModel } from 'src/app/models/Salary.model';

const KEY = 'salaryInfo';

@Injectable({
  providedIn: 'root',
})
export class SalaryDataService {
  salarySubject = new Subject<SalaryModel>();

  constructor(private dataService: DataService) {}

  getData(): Observable<SalaryModel | {}> {
    return this.dataService.storageReady.pipe(
      filter((ready) => ready),
      switchMap((_) => {
        return from(this.dataService.storage.get(KEY) ?? of({}));
      })
    );
  }

  subscribeToSalaryInfo() {
    return this.salarySubject.asObservable();
  }

  updateSalaryInfo(salary: SalaryModel){
    this.salarySubject.next(salary)
  }

  async registerSalary(salary: Omit<SalaryModel, 'id'>) {
    const newSalary: SalaryModel = { ...salary, id: crypto.randomUUID() };
    await this.dataService.storage.set(KEY, newSalary);
    this.updateSalaryInfo(newSalary);
  }

  async removeSalaryInfo(index: any) {
    return await this.dataService.storage.set(KEY, {});
  }
}
