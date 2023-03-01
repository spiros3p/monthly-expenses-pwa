import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';

import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe ', () => {
  let spectator: SpectatorPipe<EllipsisPipe>;
  const createPipe = createPipeFactory(EllipsisPipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | ellipsis }}</div>`);

    expect(spectator.element).toHaveText('Testing');
  });
});
