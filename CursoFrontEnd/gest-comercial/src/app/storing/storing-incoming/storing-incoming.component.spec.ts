import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringIncomingComponent } from './storing-incoming.component';

describe('StoringIncomingComponent', () => {
  let component: StoringIncomingComponent;
  let fixture: ComponentFixture<StoringIncomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoringIncomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
