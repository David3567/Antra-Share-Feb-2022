import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorycardComponent } from './storycard.component';

describe('StorycardComponent', () => {
  let component: StorycardComponent;
  let fixture: ComponentFixture<StorycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
