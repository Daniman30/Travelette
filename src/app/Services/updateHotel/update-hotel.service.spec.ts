import { TestBed } from '@angular/core/testing';

import { UpdateHotelService } from './update-hotel.service';

describe('UpdateHotelService', () => {
  let service: UpdateHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
