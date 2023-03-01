import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SalaryUnsetComponent } from '../tab2/salary-area/salary-unset/salary-unset.component';
import { SalarySetComponent } from '../tab2/salary-area/salary-set/salary-set.component';
import { ExpensesUnsetComponent } from './expenses-area/expenses-unset/expenses-unset.component';
import { ExpensesSetComponent } from './expenses-area/expenses-set/expenses-set.component';
import { ExpenseItemComponent } from './expenses-area/expense-item/expense-item.component';
import { SharedModule } from '../shared/shared.module';
import { ExpenseModalComponent } from './modals/expense-modal/expense-modal.component';
import { SalaryModalComponent } from './modals/salary-modal/salary-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategorySelectionComponent } from './modals/expense-modal/category-selection/category-selection.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    Tab2Page,
    SalaryUnsetComponent,
    SalarySetComponent,
    ExpensesUnsetComponent,
    ExpensesSetComponent,
    ExpenseItemComponent,
    ExpenseModalComponent,
    SalaryModalComponent,
    CategorySelectionComponent,
  ],
})
export class Tab2PageModule {}
