import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ExpenseModalComponent } from './expense-modal.component';

describe('ExpenseModalComponent', () => {
  let spectator: Spectator<ExpenseModalComponent>;
  const createComponent = createComponentFactory(ExpenseModalComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
