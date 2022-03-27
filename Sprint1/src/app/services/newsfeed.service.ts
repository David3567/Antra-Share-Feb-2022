import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './interface/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  private baseUrl = 'http://localhost:4231';
  private path = 'api/news';
  
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<any>([this.baseUrl, this.path].join('/'));
  }

  addNews(news: News) {
    return this.http.post([this.baseUrl, this.path].join('/'), news);
  }

  deleteNews(id: number) {
    return this.http.delete([this.baseUrl, this.path, id].join('/'));
  }
}
