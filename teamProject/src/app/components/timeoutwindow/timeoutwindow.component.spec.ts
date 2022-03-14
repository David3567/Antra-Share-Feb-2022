import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoutwindowComponent } from './timeoutwindow.component';

describe('TimeoutwindowComponent', () => {
  let component: TimeoutwindowComponent;
  let fixture: ComponentFixture<TimeoutwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoutwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
