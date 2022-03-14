import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from './interfaces';


@Injectable()
export class NewsfeedService {
  private baseUrl = "http://localhost:4231/api/news";

  constructor(private http: HttpClient) { }


  getStoris() {
    return this.http.get(this.baseUrl) as Observable<
    Story[]
    >;
  }
}

