import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SalarySetComponent } from './salary-set.component';

describe('SalarySetComponent', () => {
  let spectator: Spectator<SalarySetComponent>;
  const createComponent = createComponentFactory(SalarySetComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
