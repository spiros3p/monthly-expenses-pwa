import { Component, Input, OnInit } from '@angular/core';
import { SalaryModel } from 'src/app/models/Salary.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-salary-set',
  templateUrl: './salary-set.component.html',
  styleUrls: ['./salary-set.component.scss'],
})
export class SalarySetComponent implements OnInit {
  @Output() editBtnClick = new EventEmitter();
  @Input() salary!: SalaryModel;
  salaryAmount!: number;
  dayOfMonth!: number | string;
  symbol!: string;

  constructor() {}

  ngOnInit(): void {
    this.initSalary();
    this.resolveSymbol();
  }

  resolveSymbol() {
    this.symbol = '€';
  }

  initSalary() {
    this.salaryAmount = this.salary.amount;
    this.dayOfMonth = this.salary.dayOfMonth || '-';
  }

  onEditSalary() {
    this.editBtnClick.emit();
  }
}
