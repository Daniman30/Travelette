import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOfferBookingComponent } from './hotel-offer-booking.component';

describe('HotelOfferBookingComponent', () => {
  let component: HotelOfferBookingComponent;
  let fixture: ComponentFixture<HotelOfferBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelOfferBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelOfferBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
