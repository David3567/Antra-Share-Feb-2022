import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import { TodolistService } from '../services/todolist.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodolistComponent],
      providers: [TodolistService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  //   beforeEach(() => {
  //     fixture = TestBed.createComponent(TodolistComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();
  //   });
  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });
});
