import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as TodoActions from 'src/app/Ngrx/todo.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.model';
import { of } from 'rxjs';

@Injectable()
export class TodoEffect {
  private path = 'todos';

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist),
      mergeMap((_) => {
        return this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
          map((todos: Todo[]) => {
            console.log('effect: ', todos);
            return TodoActions.loadTodolistSuccess({ todolist: todos });
          }),
          catchError((err) => {
            return of(TodoActions.loadTodolistFailure({ err }));
          })
        );
      })
    );
  });

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    @Inject('baseUrl') private baseUrl: string
  ) {}
}
