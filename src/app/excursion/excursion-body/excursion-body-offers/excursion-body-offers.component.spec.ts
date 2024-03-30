import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionBodyOffersComponent } from './excursion-body-offers.component';

describe('ExcursionBodyOffersComponent', () => {
    let component: ExcursionBodyOffersComponent;
    let fixture: ComponentFixture<ExcursionBodyOffersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExcursionBodyOffersComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExcursionBodyOffersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
