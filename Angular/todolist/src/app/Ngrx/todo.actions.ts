import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.model';

export const initTodolist = createAction('[TodoList] Initialize TodoList');

// load Todos;
export const loadTodolist = createAction('[TodoList] Load TodoList');

export const loadTodosSuccess = createAction(
  '[TodoList] Load TodoList success',
  // '[TodoList] Load TodoList',
  props<{ todolist: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[TodoList] Load TodoList failure',
  // '[TodoList] Load TodoList',
  props<{ err: string }>()
);

// add Todo;
export const addTodo = createAction(
  '[TodoList] Add Todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[TodoList] Add Todo success',
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  '[TodoList] Add Todo failure',
  props<{ err: string }>()
);

// delete Todo;
export const deleteTodo = createAction(
  '[TodoList] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodoSuccess = createAction(
  '[TodoList] Delete Todo success',
  props<{ id: string }>()
);

export const deleteTodoFailure = createAction(
  '[TodoList] Delete Todo failure',
  props<{ err: string }>()
);
