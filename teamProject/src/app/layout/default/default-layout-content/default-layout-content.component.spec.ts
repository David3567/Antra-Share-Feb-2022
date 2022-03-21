import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutContentComponent } from './default-layout-content.component';

describe('DefaultLayoutContentComponent', () => {
  let component: DefaultLayoutContentComponent;
  let fixture: ComponentFixture<DefaultLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
