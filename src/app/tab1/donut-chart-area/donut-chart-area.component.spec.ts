import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DonutChartAreaComponent } from './donut-chart-area.component';

describe('DonutChartAreaComponent', () => {
  let spectator: Spectator<DonutChartAreaComponent>;
  const createComponent = createComponentFactory(DonutChartAreaComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
