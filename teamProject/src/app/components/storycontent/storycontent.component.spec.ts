import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorycontentComponent } from './storycontent.component';

describe('StorycontentComponent', () => {
  let component: StorycontentComponent;
  let fixture: ComponentFixture<StorycontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorycontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
