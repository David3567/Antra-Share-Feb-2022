import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../admin/models/user.model';
import { News } from '../news-feed/models/news.model';

@Injectable({
  providedIn: 'root'
})



export class apiService {

  private userUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { 
    
  }

  getUsers() {
    return this.http.get<User>(this.userUrl);
  }
}
