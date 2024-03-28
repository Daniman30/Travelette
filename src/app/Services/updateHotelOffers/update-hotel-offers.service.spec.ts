import { TestBed } from '@angular/core/testing';

import { UpdateHotelOffersService } from './update-hotel-offers.service';

describe('UpdateHotelOffersService', () => {
  let service: UpdateHotelOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateHotelOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
