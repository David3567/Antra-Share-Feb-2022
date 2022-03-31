import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as TodoActions from 'src/app/Ngrx/todo.actions';
import { Todo } from '../interfaces/todo.model';
import { of } from 'rxjs';
import { baseUrl } from '../app.module';

@Injectable()
export class TodoEffect {
  private path = 'todos';

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

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    @Inject(baseUrl) private baseUrl: string
  ) {}
}
