import { TestBed } from '@angular/core/testing';

import { DeleteFacilityService } from './delete-facility.service';

describe('DeleteFacilityService', () => {
  let service: DeleteFacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
