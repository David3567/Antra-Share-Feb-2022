import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeobsComponent } from './mergeobs.component';

describe('MergeobsComponent', () => {
  let component: MergeobsComponent;
  let fixture: ComponentFixture<MergeobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
