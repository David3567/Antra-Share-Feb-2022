import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser } from '../admin/models/createUser.model';
import { User } from '../admin/models/user.model';
import { News } from '../news-feed/models/news.model';

@Injectable({
  providedIn: 'root'
})



export class apiService {

  private userUrl = "https://jsonplaceholder.typicode.com/users"
  private createUserUrl = "http://localhost:4231/"

  constructor(private http: HttpClient) { 
    
  }

  getUsers() {
    return this.http.get<User>(this.userUrl);
  }

  createUser(userInfo: any): Observable<any> {
    console.log("in api, user info is: ", userInfo )
    return this.http.post<any>(this.createUserUrl, userInfo)
  }
}
