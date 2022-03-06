import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interface/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos") as Observable<Todo[]>;
  }
}
