import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBookingDetailsComponent } from './package-booking-details.component';

describe('PackageBookingDetailsComponent', () => {
  let component: PackageBookingDetailsComponent;
  let fixture: ComponentFixture<PackageBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageBookingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
