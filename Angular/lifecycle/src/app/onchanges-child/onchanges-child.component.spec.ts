import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangesChildComponent } from './onchanges-child.component';

describe('OnchangesChildComponent', () => {
  let component: OnchangesChildComponent;
  let fixture: ComponentFixture<OnchangesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
