import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddhotelComponent } from './admin-addhotel.component';

describe('AdminAddhotelComponent', () => {
    let component: AdminAddhotelComponent;
    let fixture: ComponentFixture<AdminAddhotelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdminAddhotelComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AdminAddhotelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
