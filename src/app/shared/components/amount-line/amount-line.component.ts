import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

const DEFAULT_SYMBOL = '€';

@Component({
  selector: 'app-amount-line',
  templateUrl: './amount-line.component.html',
  styleUrls: ['./amount-line.component.scss'],
})
export class AmountLineComponent implements OnInit, OnChanges {
  @Input() amount!: number;
  @Input() color: string = 'inherit';
  decimalPart!: string;
  integerPart!: number;
  symbol!: string;

  constructor() {}

  ngOnInit(): void {
    this.resolveSymbol();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resolveDecimalPart();
    this.resolveIntegerPart();      
  }

  private resolveDecimalPart() {
    this.decimalPart = `.${this.amount.toFixed(2).split('.')[1]}`;
  }

  private resolveIntegerPart() {
    this.integerPart = parseInt(this.amount.toFixed());
  }

  private resolveSymbol() {
    this.symbol = DEFAULT_SYMBOL;
  }
}
