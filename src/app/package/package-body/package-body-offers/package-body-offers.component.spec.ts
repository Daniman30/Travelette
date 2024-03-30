import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBodyOffersComponent } from './package-body-offers.component';

describe('PackageBodyOffersComponent', () => {
    let component: PackageBodyOffersComponent;
    let fixture: ComponentFixture<PackageBodyOffersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PackageBodyOffersComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PackageBodyOffersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
