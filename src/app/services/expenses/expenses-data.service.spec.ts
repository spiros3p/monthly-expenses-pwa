import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ExpensesDataService } from './expenses-data.service';

describe('ExpensesDataService', () => {
  let spectator: SpectatorService<ExpensesDataService>;
  const createService = createServiceFactory(ExpensesDataService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});