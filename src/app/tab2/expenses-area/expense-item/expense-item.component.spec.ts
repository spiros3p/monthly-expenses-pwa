import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ExpenseItemComponent } from './expense-item.component';

describe('ExpenseItemComponent', () => {
  let spectator: Spectator<ExpenseItemComponent>;
  const createComponent = createComponentFactory(ExpenseItemComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
