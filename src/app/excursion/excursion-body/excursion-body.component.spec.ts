import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionBodyComponent } from './excursion-body.component';

describe('ExcursionBodyComponent', () => {
    let component: ExcursionBodyComponent;
    let fixture: ComponentFixture<ExcursionBodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExcursionBodyComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExcursionBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
