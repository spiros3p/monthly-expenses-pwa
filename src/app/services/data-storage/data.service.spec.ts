import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { DataService } from './data.service';

describe('DataService', () => {
  let spectator: SpectatorService<DataService>;
  const createService = createServiceFactory(DataService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});