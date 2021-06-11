import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSuppliersComponent } from './from-suppliers.component';

describe('FromSuppliersComponent', () => {
  let component: FromSuppliersComponent;
  let fixture: ComponentFixture<FromSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
