import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SalaryUnsetComponent } from './salary-unset.component';

describe('SalaryUnsetComponent', () => {
  let spectator: Spectator<SalaryUnsetComponent>;
  const createComponent = createComponentFactory(SalaryUnsetComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
