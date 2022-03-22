import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Show1Component } from './show1.component';

describe('Show1Component', () => {
  let component: Show1Component;
  let fixture: ComponentFixture<Show1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Show1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Show1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
