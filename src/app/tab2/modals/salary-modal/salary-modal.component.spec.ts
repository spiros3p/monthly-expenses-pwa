import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SalaryModalComponent } from './salary-modal.component';

describe('SalaryModalComponent', () => {
  let spectator: Spectator<SalaryModalComponent>;
  const createComponent = createComponentFactory(SalaryModalComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
