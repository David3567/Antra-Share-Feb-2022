import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailedInfoPanelComponent } from './user-detailed-info-panel.component';

describe('UserDetailedInfoPanelComponent', () => {
  let component: UserDetailedInfoPanelComponent;
  let fixture: ComponentFixture<UserDetailedInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailedInfoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailedInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
