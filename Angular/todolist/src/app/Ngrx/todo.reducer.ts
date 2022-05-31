import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.model';

import * as TodoActions from './todo.actions';

// const state: TodoState = {
//   todolist: [
//     {
//       userId: 1,
//       id: 1,
//       title: 'delectus aut autem',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: 'quis ut nam facilis et officia qui',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: 'fugiat veniam minus',
//       completed: false,
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: 'et porro tempora',
//       completed: true,
//     },
//     {
//       userId: 1,
//       id: 5,
//       title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
//       completed: false,
//     },
//   ],
//   err: '',
// };

const state: TodoState = {
  todolist: [],
};

export const todoreducer = createReducer(
  state,
  on(TodoActions.initTodolist, (state) => {
    return { ...state };
  }),
  // load todos;
  on(TodoActions.loadTodosSuccess, (state, { todolist }): TodoState => {
    return {
      ...state,
      todolist: [...[...todolist].reverse()],
      err: '',
    };
  }),
  on(TodoActions.loadTodosFailure, (state, { err }): TodoState => {
    return {
      ...state,
      todolist: [],
      err,
    };
  }),
  // add todo;
  on(TodoActions.addTodoSuccess, (state, { todo }): TodoState => {
    return {
      ...state,
      todolist: [todo, ...state.todolist],
      err: '',
    };
  }),
  on(TodoActions.addTodoFailure, (state, { err }): TodoState => {
    return {
      ...state,
      todolist: [],
      err,
    };
  }),
  // delete todo;
  on(TodoActions.deleteTodoSuccess, (state, { id }): TodoState => {
    const newtodolist = state.todolist.filter((todo) => {
      return todo.id ? +todo.id !== +id : true;
    });
    return {
      ...state,
      todolist: [...newtodolist],
      err: '',
    };
  }),
  on(TodoActions.deleteTodoFailure, (state, { err }): TodoState => {
    return {
      ...state,
      todolist: [],
      err,
    };
  })
);
