import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddagencyComponent } from './admin-addagency.component';

describe('AdminAddagencyComponent', () => {
    let component: AdminAddagencyComponent;
    let fixture: ComponentFixture<AdminAddagencyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdminAddagencyComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AdminAddagencyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
