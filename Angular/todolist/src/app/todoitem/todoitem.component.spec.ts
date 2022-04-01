import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoitemComponent } from './todoitem.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TodoitemComponent', () => {
  let component: TodoitemComponent;
  let fixture: ComponentFixture<TodoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoitemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
