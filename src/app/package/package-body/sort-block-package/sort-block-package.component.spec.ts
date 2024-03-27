import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBlockPackageComponent } from './sort-block-package.component';

describe('SortBlockPackageComponent', () => {
  let component: SortBlockPackageComponent;
  let fixture: ComponentFixture<SortBlockPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortBlockPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortBlockPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
