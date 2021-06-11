import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCustomersComponent } from './to-customers.component';

describe('ToCustomersComponent', () => {
  let component: ToCustomersComponent;
  let fixture: ComponentFixture<ToCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
