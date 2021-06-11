import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringListComponent } from './storing-list.component';

describe('StoringListComponent', () => {
  let component: StoringListComponent;
  let fixture: ComponentFixture<StoringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoringListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
