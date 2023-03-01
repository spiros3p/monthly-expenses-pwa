import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CategoryLineComponent } from './category-line.component';

describe('CategoryLineComponent', () => {
  let spectator: Spectator<CategoryLineComponent>;
  const createComponent = createComponentFactory(CategoryLineComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
