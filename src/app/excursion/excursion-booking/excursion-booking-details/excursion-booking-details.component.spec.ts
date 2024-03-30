import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionBookingDetailsComponent } from './excursion-booking-details.component';

describe('ExcursionBookingDetailsComponent', () => {
    let component: ExcursionBookingDetailsComponent;
    let fixture: ComponentFixture<ExcursionBookingDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExcursionBookingDetailsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExcursionBookingDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
