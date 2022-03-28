import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  basrUrl = "http://localhost:4231/api";
  login = "login";

  constructor(private http: HttpClient) { }

  userlogin(email:string, password:string): Observable<any> {
    return this.http.post([this.basrUrl, this.login].join('/'), {email, password},httpOptions);

  }


}
