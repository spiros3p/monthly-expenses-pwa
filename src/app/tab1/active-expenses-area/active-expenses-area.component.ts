import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-expenses-area',
  templateUrl: './active-expenses-area.component.html',
  styleUrls: ['./active-expenses-area.component.scss']
})
export class ActiveExpensesAreaComponent {
  @Input() activeExpenses: any[] = [];

}
