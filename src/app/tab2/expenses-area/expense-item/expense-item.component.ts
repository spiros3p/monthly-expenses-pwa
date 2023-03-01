import { Component, Input } from '@angular/core';
import { ExpenseModel } from 'src/app/models/Expenses.model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent {
  @Input() expenseData!: ExpenseModel;
  amountColor: string = 'red';
}
