import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ExpensesSetComponent } from './expenses-set.component';

describe('ExpensesSetComponent', () => {
  let spectator: Spectator<ExpensesSetComponent>;
  const createComponent = createComponentFactory(ExpensesSetComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
