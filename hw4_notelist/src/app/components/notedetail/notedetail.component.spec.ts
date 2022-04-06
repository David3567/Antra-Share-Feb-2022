import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotedetailComponent } from './notedetail.component';

describe('NotedetailComponent', () => {
  let component: NotedetailComponent;
  let fixture: ComponentFixture<NotedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
