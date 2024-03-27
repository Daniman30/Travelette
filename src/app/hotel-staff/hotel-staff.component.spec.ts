import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelStaffComponent } from './hotel-staff.component';

describe('HotelStaffComponent', () => {
  let component: HotelStaffComponent;
  let fixture: ComponentFixture<HotelStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelStaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
