import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newsTemplate } from '../interfaces/news.model';

const httpOptions = {
  observe: "response" as "body", // check the whole response
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<any>('http://localhost:4231/api/news');
  }

  postNews(newStory: newsTemplate) {
    return this.http.post<newsTemplate>('http://localhost:4231/api/news', newStory, httpOptions);
  }

  deletePost(id: string) {
    return this.http.delete(`http://localhost:4231/api/news/deletePost/${id}`, httpOptions);
  }
  
}
