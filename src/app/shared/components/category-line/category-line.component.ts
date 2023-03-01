import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-line',
  templateUrl: './category-line.component.html',
  styleUrls: ['./category-line.component.scss']
})
export class CategoryLineComponent {
  @Input() category: any;
  @Input() outline: boolean = false;
}
