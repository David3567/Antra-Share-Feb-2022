import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertagComponent } from './usertag.component';

describe('UsertagComponent', () => {
  let component: UsertagComponent;
  let fixture: ComponentFixture<UsertagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
