import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SalaryDataService } from './salary-data.service';

describe('SalaryDataService', () => {
  let spectator: SpectatorService<SalaryDataService>;
  const createService = createServiceFactory(SalaryDataService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});