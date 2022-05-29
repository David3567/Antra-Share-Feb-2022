import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedislikeComponent } from './likedislike.component';

describe('LikedislikeComponent', () => {
  let component: LikedislikeComponent;
  let fixture: ComponentFixture<LikedislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedislikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
