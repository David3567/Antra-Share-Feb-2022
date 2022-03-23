import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.model';

@Injectable()
export class TodolistService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private path = 'todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>([this.baseUrl, this.path].join('/'));
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>([this.baseUrl, this.path].join('/'), newTodo);
  }

  deleteTodo(id: number) {
    return this.http.delete([this.baseUrl, this.path, id].join('/'));
  }
}
