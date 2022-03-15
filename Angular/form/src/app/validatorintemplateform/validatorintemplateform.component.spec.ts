import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorintemplateformComponent } from './validatorintemplateform.component';

describe('ValidatorintemplateformComponent', () => {
  let component: ValidatorintemplateformComponent;
  let fixture: ComponentFixture<ValidatorintemplateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorintemplateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorintemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
