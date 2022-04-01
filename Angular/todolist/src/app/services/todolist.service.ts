import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseUrl } from '../app.module';
import { Todo } from '../interfaces/todo.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  // private baseUrl = 'https://jsonplaceholder.typicode.com';
  private path = 'todos';

  constructor(
    private http: HttpClient,
    @Optional() @Inject(baseUrl) private baseUrl: string
  ) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
      catchError((err) => of([new Todo()]) as Observable<Todo[]>)
      // catchError((err) => of([123] as unknown as Todo[]))
    );
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>([this.baseUrl, this.path].join('/'), newTodo);
  }

  deleteTodo(id: string) {
    return this.http.delete([this.baseUrl, this.path, id].join('/'));
  }
}
