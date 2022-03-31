import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as TodoActions from 'src/app/Ngrx/todo.actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.model';
import { of } from 'rxjs';

@Injectable()
export class TodoEffect {
  private path = 'todos';

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist), // selec action;
      switchMap((_) =>
        this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
          map((todos: any) =>
            TodoActions.loadTodolistSuccess({ todolist: todos })
          )
          // catchError((err) => of(TodoActions.loadTodolistFailure({ err: err })))
        )
      )
    );
  });

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    @Inject('baseUrl') private baseUrl: string
  ) {}
}
