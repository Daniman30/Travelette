import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionBookingComponent } from './excursion-booking.component';

describe('ExcursionBookingComponent', () => {
    let component: ExcursionBookingComponent;
    let fixture: ComponentFixture<ExcursionBookingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExcursionBookingComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExcursionBookingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
