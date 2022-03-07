import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("http://localhost:3000/users") as Observable<any>;
  }
}
