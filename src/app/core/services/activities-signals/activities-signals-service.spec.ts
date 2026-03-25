import { TestBed } from '@angular/core/testing';

import { ActivitiesSignalsService } from '../activities-signals/activities-signals-service';

describe('ActivitiesSignalsService', () => {
  let service: ActivitiesSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
