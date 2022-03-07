import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private path = 'todos';
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<Todo[]>;
  }
}
