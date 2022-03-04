import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangetitleComponent } from './changetitle.component';

describe('ChangetitleComponent', () => {
  let component: ChangetitleComponent;
  let fixture: ComponentFixture<ChangetitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangetitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangetitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
