import { Component, Input, OnInit } from '@angular/core';
import { SalaryModel } from 'src/app/models/Salary.model';
import { Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_SYMBOL = environment.currency;

@Component({
  selector: 'app-salary-set',
  templateUrl: './salary-set.component.html',
  styleUrls: ['./salary-set.component.scss'],
})
export class SalarySetComponent implements OnInit {
  @Output() editBtnClick = new EventEmitter();
  @Input() get salary(): SalaryModel {
    return this._salary;
  }

  set salary(value: SalaryModel) {
    this.salaryAmount.next(value.amount);
    this.dayOfMonth.next(value.dayOfMonth || '-');
    this._salary = value;
  }

  _salary!: SalaryModel;
  salaryAmount = new BehaviorSubject<number>(0);
  dayOfMonth = new BehaviorSubject<number | string>('-');
  symbol!: string;

  constructor() {}

  ngOnInit(): void {
    this.resolveSymbol();
  }

  resolveSymbol() {
    this.symbol = DEFAULT_SYMBOL;
  }

  onEditSalary() {
    this.editBtnClick.emit();
  }
}
