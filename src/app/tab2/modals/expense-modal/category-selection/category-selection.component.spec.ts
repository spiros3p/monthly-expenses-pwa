import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CategorySelectionComponent } from './category-selection.component';

describe('CategorySelectionComponent', () => {
  let spectator: Spectator<CategorySelectionComponent>;
  const createComponent = createComponentFactory(CategorySelectionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
