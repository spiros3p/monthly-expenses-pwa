import { Component, Input } from '@angular/core';
import { Categories } from 'src/app/models/Expenses.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent {
  @Input() categories: any;
  @Output() newSelection = new EventEmitter<string>();
  selection = undefined; //Categories['Bills'];

  onSelect(category: any) {
    this.selection = category;
    this.newSelection.emit(category);
  }
}
