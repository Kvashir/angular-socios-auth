import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringOutgoingComponent } from './storing-outgoing.component';

describe('StoringOutgoingComponent', () => {
  let component: StoringOutgoingComponent;
  let fixture: ComponentFixture<StoringOutgoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoringOutgoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringOutgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
