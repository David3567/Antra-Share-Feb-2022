import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../interface/interface.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = "http://localhost:4231/api";
  private path = "news";

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<
      Story[]
    >;
  }
}