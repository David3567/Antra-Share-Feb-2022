import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseritemsComponent } from './useritems.component';

describe('UseritemsComponent', () => {
  let component: UseritemsComponent;
  let fixture: ComponentFixture<UseritemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseritemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseritemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
