import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedstorylistComponent } from './likedstorylist.component';

describe('LikedstorylistComponent', () => {
  let component: LikedstorylistComponent;
  let fixture: ComponentFixture<LikedstorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedstorylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedstorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
