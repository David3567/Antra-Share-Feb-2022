import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Todo } from '../interfaces/todo.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  path = 'todos';

  private todos: Todo[] = [];
  private todosSubject$ = new BehaviorSubject(this.todos);
  todos$ = this.todosSubject$.asObservable();

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
      tap((todos) => {
        this.todos = [...todos].reverse();
        this.todosSubject$.next(this.todos);
      }),
      catchError((err) => of([new Todo()]) as Observable<Todo[]>)
    );
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>([this.baseUrl, this.path].join('/'), newTodo)
      .pipe(
        tap((todo) => {
          this.todos = [todo, ...this.todos];
          this.todosSubject$.next(this.todos);
        })
      );
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo: any) => +id !== +todo.id);
    this.todosSubject$.next(this.todos);
    return this.http.delete([this.baseUrl, this.path, id].join('/'));
  }
}
