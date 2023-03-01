import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AmountLineComponent } from './amount-line.component';

describe('AmountLineComponent', () => {
  let spectator: Spectator<AmountLineComponent>;
  const createComponent = createComponentFactory(AmountLineComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
