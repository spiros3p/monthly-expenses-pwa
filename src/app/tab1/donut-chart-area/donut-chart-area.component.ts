import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ExpenseModel } from 'src/app/models/Expenses.model';
import { SalaryModel } from 'src/app/models/Salary.model';
import { ChangeDetectorRef } from '@angular/core';

const DEFAULT_SALARY = { id: 'id', amount: 0 };

@Component({
  selector: 'app-donut-chart-area',
  templateUrl: './donut-chart-area.component.html',
  styleUrls: ['./donut-chart-area.component.scss'],
})
export class DonutChartAreaComponent implements OnInit, OnChanges {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @Input() expensesData: ExpenseModel[] = [];
  @Input() salaryData!: SalaryModel;
  symbol: string = '€';
  totalExpensesAmount: number = 0;
  salaryAmount = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.salaryData !== undefined && this.expensesData !== undefined) {
      this.calculateData(this.expensesData, this.salaryData);
      this;
    }
  }

  calculateData(expensesList: ExpenseModel[], salaryInfo: SalaryModel) {
    const amounts: number[] = [];
    const categories: string[] = [];
    let remainingFromTotal = salaryInfo.amount;
    let totalExpensesAmount = 0;
    let categorizedList = this.calculateAmountPerCategory(expensesList);
    categorizedList.map((expense) => {
      amounts.push(expense.amount);
      categories.push(expense.category);
      remainingFromTotal -= expense.amount;
      totalExpensesAmount += expense.amount;
    });

    this.updateChart([...amounts, remainingFromTotal], categories);
    this.totalExpensesAmount = totalExpensesAmount;
    this.salaryAmount = salaryInfo.amount;
    this.changeDetectorRef.detectChanges();
  }

  calculateAmountPerCategory(expensesList: ExpenseModel[]) {
    let uniqueCategories: string[] = [];
    let newList: any[] = [];
    expensesList.map((expense) => {
      if (uniqueCategories.includes(expense.category)) {
        let index = newList.findIndex(
          (item) => item.category === expense.category
        );
        newList[index].amount += expense.amount;
      } else {
        uniqueCategories.push(expense.category);
        newList.push({ amount: expense.amount, category: expense.category });
      }
    });
    return newList;
  }

  updateChart(list: number[], categories: string[]) {
    this.doughnutChartLabels = categories;
    this.doughnutChartDatasets[0].data = list;
    this.chart?.chart?.update();
  }

  // Doughnut
  // Doughnut ////////////////////////////////////////////////////
  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{ data: [1500, 450, 100], label: this.symbol }];
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    plugins: { legend: { position: 'bottom' } },
  };
  // Doughnut ////////////////////////////////////////////////////
}
