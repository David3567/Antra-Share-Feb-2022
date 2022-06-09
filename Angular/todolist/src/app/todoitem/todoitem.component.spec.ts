import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoitemComponent } from './todoitem.component';
import { Todo } from '../interfaces/todo.model';

@Component({
  selector: 'todolist',
  template: `<app-todoitem [todoitem]="todo"></app-todoitem>`,
})
class TestComponent {
  todo: Todo = {
    userId: 2,
    id: 24,
    title: 'adipisci non ad dicta qui amet quaerat doloribus ea',
    completed: false,
  };
}

describe('TodoitemComponent', () => {
  let component: TodoitemComponent;
  let fixture: ComponentFixture<TodoitemComponent>;

  let parentfixture: ComponentFixture<TestComponent>;
  let itemcomponent: TodoitemComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoitemComponent, TestComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    parentfixture = TestBed.createComponent(TestComponent);
    itemcomponent = parentfixture.debugElement.children[0].componentInstance;
    parentfixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the data from parent', () => {
    expect(itemcomponent.todoitem).toEqual({
      userId: 2,
      id: 24,
      title: 'adipisci non ad dicta qui amet quaerat doloribus ea',
      completed: false,
    });
  });
});
