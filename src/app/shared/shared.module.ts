import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OrdinalPipe } from '../shared/pipes/ordinal.pipe';
import { CategoryLineComponent } from './components/category-line/category-line.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { AmountLineComponent } from './components/amount-line/amount-line.component';

@NgModule({
  declarations: [
    OrdinalPipe,
    EllipsisPipe,
    CategoryLineComponent,
    AmountLineComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    OrdinalPipe,
    EllipsisPipe,
    CategoryLineComponent,
    AmountLineComponent,
  ],
})
export class SharedModule {}
