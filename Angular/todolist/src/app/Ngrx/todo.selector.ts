import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo, TodoState } from '../interfaces/todo.model';

export const selectTodo = createFeatureSelector<TodoState>('todos');

export const getTodoList = createSelector(
  selectTodo,
  (state: TodoState): Todo[] => state.todolist
);
