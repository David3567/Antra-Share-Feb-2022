import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../interfaces/story.model';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private baseUrl = 'http://localhost:4231/api';
  private path = 'news';
  constructor(private http: HttpClient) {}
  getStories() {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<
      Story[]
    >;
  }
}
