import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionSearchComponent } from './excursion-search.component';

describe('ExcursionSearchComponent', () => {
    let component: ExcursionSearchComponent;
    let fixture: ComponentFixture<ExcursionSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExcursionSearchComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExcursionSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
