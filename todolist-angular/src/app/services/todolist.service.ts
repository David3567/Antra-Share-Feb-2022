import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable  } from 'rxjs';
import { Todo } from '../interfaces/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private baseUrl = 'http://localhost:3000';
  private path = 'todos';

  constructor(private http: HttpClient) { }
  getTodos(){
    return this.http.get([this.baseUrl,this.path].join('/')) as Observable<Todo[]>;
  }
  addTodo(todo:Todo){
    return this.http.post([this.baseUrl,this.path].join('/'), todo) as Observable<Todo>;
  }
  deleteTodo(todoId:number){
    const url = `${this.baseUrl}/${this.path}/${todoId}`;
    return this.http.delete<Todo>(url);
  }
}
