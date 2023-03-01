import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-salary-unset',
  templateUrl: './salary-unset.component.html',
  styleUrls: ['./salary-unset.component.scss']
})
export class SalaryUnsetComponent {
  @Output() addSalaryButtonClicked = new EventEmitter<string>();

  onAddSalaryButton(){
    this.addSalaryButtonClicked.emit()
  }
}
