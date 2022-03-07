import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces';

@Injectable()
export class TodolistService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private path = 'todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<
      Todo[]
    >;
  }

  addTodo(newtodo: Todo) {
    return this.http.post([this.baseUrl, this.path].join('/'), newtodo) as Observable<
      Todo
    >;
    // fetch(url, body)
  }
}