import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, Observable, of, Subject, switchMap } from 'rxjs';
import { DataService } from '../data-storage/data.service';
import { SalaryModel } from 'src/app/models/Salary.model';
import { v4 as uuidv4 } from 'uuid';

const KEY = 'salaryData';

type SalaryModelOrEmpty = SalaryModel | {};

@Injectable({
  providedIn: 'root',
})
export class SalaryDataService {
  salarySubject = new BehaviorSubject<SalaryModelOrEmpty>({});

  constructor(private dataService: DataService) {}

  getData(): Observable<SalaryModel | {}> {
    return this.dataService.storageReady.pipe(
      filter((ready) => ready),
      switchMap(async (_) => {
        let salaryDataStored = await this.dataService.storage.get(KEY) || {};
        this.updateSalaryInfo(this.resolveObject(salaryDataStored))
        return this.resolveObject(salaryDataStored);
      })
    );
  }

  resolveObject(item: any){
    return item || {}
  }

  subscribeToSalaryInfo() {
    return this.salarySubject.asObservable();
  }

  updateSalaryInfo(salary: SalaryModelOrEmpty){
    this.salarySubject.next(salary)
  }

  async registerSalary(salary: Omit<SalaryModel, 'id'>) {
    const newSalary: SalaryModel = { ...salary, id: uuidv4() };
    await this.dataService.storage.set(KEY, newSalary);
    this.updateSalaryInfo(newSalary);
  }

  async removeSalaryInfo(index: any) {
    await this.dataService.storage.set(KEY, {});
    this.updateSalaryInfo({});
  }
}
