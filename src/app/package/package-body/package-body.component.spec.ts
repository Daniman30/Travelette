import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBodyComponent } from './package-body.component';

describe('PackageBodyComponent', () => {
    let component: PackageBodyComponent;
    let fixture: ComponentFixture<PackageBodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PackageBodyComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PackageBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
