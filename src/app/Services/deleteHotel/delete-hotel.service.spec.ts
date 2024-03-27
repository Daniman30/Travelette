import { TestBed } from '@angular/core/testing';

import { DeleteHotelService } from './delete-hotel.service';

describe('DeleteHotelService', () => {
  let service: DeleteHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
