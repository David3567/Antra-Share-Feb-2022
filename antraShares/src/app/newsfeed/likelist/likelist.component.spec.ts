/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikelistComponent } from './likelist.component';

describe('LikelistComponent', () => {
  let component: LikelistComponent;
  let fixture: ComponentFixture<LikelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
