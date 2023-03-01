import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expenses-set',
  templateUrl: './expenses-set.component.html',
  styleUrls: ['./expenses-set.component.scss'],
})
export class ExpensesSetComponent {
  @Input() listData: any;
  @Output() onRemoveExpense = new EventEmitter<string>();

  removeExpense(id: string) {
    this.onRemoveExpense.emit(id);
  }
}
