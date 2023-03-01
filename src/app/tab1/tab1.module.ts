import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { DonutChartAreaComponent } from './donut-chart-area/donut-chart-area.component';
import { SharedModule } from '../shared/shared.module';
import { ActiveExpensesAreaComponent } from './active-expenses-area/active-expenses-area.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgChartsModule,
    SharedModule
  ],
  declarations: [Tab1Page, DonutChartAreaComponent, ActiveExpensesAreaComponent]
})
export class Tab1PageModule {}
