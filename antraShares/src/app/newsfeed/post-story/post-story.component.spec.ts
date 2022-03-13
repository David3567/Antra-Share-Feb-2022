import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStoryComponent } from './post-story.component';

describe('PostStoryComponent', () => {
  let component: PostStoryComponent;
  let fixture: ComponentFixture<PostStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
