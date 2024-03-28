import { TestBed } from '@angular/core/testing';

import { CreateHotelOffersService } from './create-hotel-offers.service';

describe('CreateHotelOffersService', () => {
  let service: CreateHotelOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHotelOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
