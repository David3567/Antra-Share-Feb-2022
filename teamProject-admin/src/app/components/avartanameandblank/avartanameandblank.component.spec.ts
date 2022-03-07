import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvartanameandblankComponent } from './avartanameandblank.component';

describe('AvartanameandblankComponent', () => {
  let component: AvartanameandblankComponent;
  let fixture: ComponentFixture<AvartanameandblankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvartanameandblankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvartanameandblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
