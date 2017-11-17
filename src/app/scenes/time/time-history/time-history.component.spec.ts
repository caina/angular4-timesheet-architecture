import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeHistoryComponent } from './time-history.component';

describe('TimeHistoryComponent', () => {
  let component: TimeHistoryComponent;
  let fixture: ComponentFixture<TimeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
