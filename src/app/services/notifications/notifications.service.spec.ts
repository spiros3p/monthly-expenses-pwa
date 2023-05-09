import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let spectator: SpectatorService<NotificationsService>;
  const createService = createServiceFactory(NotificationsService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});