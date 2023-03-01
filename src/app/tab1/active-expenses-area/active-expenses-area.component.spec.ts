import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ActiveExpensesAreaComponent } from './active-expenses-area.component';

describe('ActiveExpensesAreaComponent', () => {
  let spectator: Spectator<ActiveExpensesAreaComponent>;
  const createComponent = createComponentFactory(ActiveExpensesAreaComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
