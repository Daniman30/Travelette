import { TestBed } from '@angular/core/testing';

import { DeleteAgencyService } from './delete-agency.service';

describe('DeleteAgencyService', () => {
  let service: DeleteAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
