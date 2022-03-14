import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { newsTemplate } from '../interfaces/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsdataService {
  private baseUrl = 'http://localhost:4231/api';
  private path = 'news';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http
      .get<newsTemplate[]>([this.baseUrl, this.path].join('/'))
      .pipe(tap(console.log));
  }
}
