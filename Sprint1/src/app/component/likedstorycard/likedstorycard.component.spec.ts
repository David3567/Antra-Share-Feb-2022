import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedstorycardComponent } from './likedstorycard.component';

describe('LikedstorycardComponent', () => {
  let component: LikedstorycardComponent;
  let fixture: ComponentFixture<LikedstorycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedstorycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedstorycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
