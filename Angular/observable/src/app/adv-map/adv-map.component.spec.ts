import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvMapComponent } from './adv-map.component';

describe('AdvMapComponent', () => {
  let component: AdvMapComponent;
  let fixture: ComponentFixture<AdvMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
