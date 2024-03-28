import { TestBed } from '@angular/core/testing';

import { ListFacilityService } from './list-facility.service';

describe('ListFacilityService', () => {
  let service: ListFacilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFacilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
