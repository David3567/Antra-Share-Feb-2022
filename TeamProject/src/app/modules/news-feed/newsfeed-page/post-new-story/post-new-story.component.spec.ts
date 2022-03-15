import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewStoryComponent } from './post-new-story.component';

describe('PostNewStoryComponent', () => {
  let component: PostNewStoryComponent;
  let fixture: ComponentFixture<PostNewStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNewStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
