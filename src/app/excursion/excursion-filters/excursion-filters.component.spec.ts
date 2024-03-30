import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionFiltersComponent } from './excursion-filters.component';

describe('ExcursionFiltersComponent', () => {
    let component: ExcursionFiltersComponent;
    let fixture: ComponentFixture<ExcursionFiltersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExcursionFiltersComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExcursionFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
