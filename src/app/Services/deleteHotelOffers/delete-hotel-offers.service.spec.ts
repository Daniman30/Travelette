import { TestBed } from '@angular/core/testing';

import { DeleteHotelOffersService } from './delete-hotel-offers.service';

describe('DeleteHotelOffersService', () => {
  let service: DeleteHotelOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteHotelOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
