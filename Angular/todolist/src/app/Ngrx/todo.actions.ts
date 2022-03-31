import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.model';

export const initTodolist = createAction('[TodoList] Initialize TodoList');

// load Todos;
export const loadTodolist = createAction('[TodoList] Load TodoList');

export const loadTodosSuccess = createAction(
  '[TodoList] Load TodoList sucess',
  // '[TodoList] Load TodoList',
  props<{ todolist: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[TodoList] Load TodoList failure',
  // '[TodoList] Load TodoList',
  props<{ err: string }>()
);
