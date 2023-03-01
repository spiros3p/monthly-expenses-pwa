import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ExpensesUnsetComponent } from './expenses-unset.component';

describe('ExpensesUnsetComponent', () => {
  let spectator: Spectator<ExpensesUnsetComponent>;
  const createComponent = createComponentFactory(ExpensesUnsetComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
