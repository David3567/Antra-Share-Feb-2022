import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interface/interface.model';

@Injectable()
export class TodolistService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private path = 'todos';

  constructor(private http: HttpClient) {}

  getTodo() {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<
      Todo[]
    >;
  }
}
