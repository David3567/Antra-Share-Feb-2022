import { Injectable } from '@angular/core';
import { News } from '../news-feed/models/news.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private baseUrl = "http://localhost:4231/api"
  private news_path = "/news"

  constructor(private http: HttpClient) { }

  getStories() {
    return this.http.get<News>([this.baseUrl, this.news_path].join(""));
  }

}
