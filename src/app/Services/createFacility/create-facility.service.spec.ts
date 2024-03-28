import { TestBed } from '@angular/core/testing';

import { CreateFacilityService } from './create-facility.service';

describe('CreateFacilityService', () => {
  let service: CreateFacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateFacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
