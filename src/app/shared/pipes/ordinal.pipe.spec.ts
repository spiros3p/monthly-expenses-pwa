import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';

import { OrdinalPipe } from './ordinal.pipe';

describe('OrdinalPipe ', () => {
  let spectator: SpectatorPipe<OrdinalPipe>;
  const createPipe = createPipeFactory(OrdinalPipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | ordinal }}</div>`);

    expect(spectator.element).toHaveText('Testing');
  });
});
