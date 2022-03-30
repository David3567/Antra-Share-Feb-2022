import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.model';

export const initTodolist = createAction('[TodoList] Initialize TodoList');

// load Todos;
export const loadTodolist = createAction('[TodoList] Load TodoList');

export const loadTodolistSuccess = createAction(
  '[TodoList] Load TodoList',
  props<{ todolist: Todo[] }>()
);

export const loadTodolistFailure = createAction(
  '[TodoList] Load TodoList',
  props<{ err: string }>()
);
