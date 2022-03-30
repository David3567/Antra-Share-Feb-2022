import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.model';

import * as TodoActions from './todo.actions';

const state: TodoState = {
  todolist: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ],
  err: '',
};

export const todoreducer = createReducer(
  state,
  on(TodoActions.initTodolist, (state) => {
    return { ...state };
  }),
  // load todos;
  on(TodoActions.loadTodolistSuccess, (state, action): TodoState => {
    console.log('success');
    return {
      ...state,
      todolist: action.todolist,
      err: '',
    };
  }),
  on(TodoActions.loadTodolistFailure, (state, action): TodoState => {
    console.log('failure');
    return {
      ...state,
      todolist: [],
      err: action.err,
    };
  })
);
