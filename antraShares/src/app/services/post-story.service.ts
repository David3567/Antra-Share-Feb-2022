import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';
import { VariableValue } from './variable.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class PostStoryService {
  baseUrl = 'http://localhost:4231/api';
  private news = "news"

  constructor(private http:HttpClient) { }

  postStory(name: string){
    return this.http.post([this.baseUrl, this.news].join('/'), name, httpOptions)
  }
}
