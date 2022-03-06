import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataitemComponent } from './dataitem.component';

describe('DataitemComponent', () => {
  let component: DataitemComponent;
  let fixture: ComponentFixture<DataitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
