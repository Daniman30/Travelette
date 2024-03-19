import { TestBed } from '@angular/core/testing';

import { CreateAgencyService } from './create-agency.service';

describe('CreateAgencyService', () => {
  let service: CreateAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
