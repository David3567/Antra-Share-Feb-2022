import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import * as TodoActions from 'src/app/Ngrx/todo.actions';
import { Todo } from '../interfaces/todo.model';
import { of } from 'rxjs';
import { baseUrl } from '../app.module';

@Injectable()
export class TodoEffect {
  private path = 'toddos';

  // load Todos;
  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist), // selec action;
      switchMap((_) =>
        this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
          map((todos: any) =>
            TodoActions.loadTodosSuccess({ todolist: todos })
          ),
          catchError((err) => of(TodoActions.loadTodosFailure({ err: err })))
        )
      )
    );
  });
  // // add Todo;
  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo), // selec action;
      switchMap((action) =>
        this.http
          .post<Todo[]>([this.baseUrl, this.path].join('/'), action.todo)
          .pipe(
            map((todo: any) => TodoActions.addTodoSuccess({ todo })),
            catchError((err) => of(TodoActions.addTodoFailure({ err: err })))
          )
      )
    );
  });
  // // delete Todo;
  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.deleteTodo), // selec action;
      switchMap(({ id }) =>
        this.http.delete<Todo[]>([this.baseUrl, this.path, id].join('/')).pipe(
          map((_) => TodoActions.deleteTodoSuccess({ id })),
          catchError((err) => of(TodoActions.deleteTodoFailure({ err: err })))
        )
      )
    );
  });

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    @Inject(baseUrl) private baseUrl: string
  ) {}
}
