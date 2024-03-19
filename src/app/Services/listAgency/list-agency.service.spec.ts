import { TestBed } from '@angular/core/testing';

import { ListAgencyService } from './list-agency.service';

describe('ListAgencyService', () => {
  let service: ListAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
