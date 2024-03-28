import { TestBed } from '@angular/core/testing';

import { ListHotelOffersService } from './list-hotel-offers.service';

describe('ListHotelOffersService', () => {
  let service: ListHotelOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListHotelOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
