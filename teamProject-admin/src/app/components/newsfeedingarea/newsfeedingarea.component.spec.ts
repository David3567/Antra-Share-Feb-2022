import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedingareaComponent } from './newsfeedingarea.component';

describe('NewsfeedingareaComponent', () => {
  let component: NewsfeedingareaComponent;
  let fixture: ComponentFixture<NewsfeedingareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedingareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedingareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
