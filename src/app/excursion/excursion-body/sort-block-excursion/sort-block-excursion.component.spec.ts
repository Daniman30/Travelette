import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBlockExcursionComponent } from './sort-block-excursion.component';

describe('SortBlockExcursionComponent', () => {
    let component: SortBlockExcursionComponent;
    let fixture: ComponentFixture<SortBlockExcursionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SortBlockExcursionComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SortBlockExcursionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
