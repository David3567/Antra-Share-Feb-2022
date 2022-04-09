import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewUser } from '../interface/newuser.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:4231/api/users';
  private getprofile = 'getProfile';

  userList: NewUser[]  = [];

  subjectCurrentUser$ = new BehaviorSubject(this.userList);

  constructor(private http: HttpClient,
    private loginService: LoginService) { }

  getProfile(username: string) {
    return this.http.get([this.url, this.getprofile, username].join('/'));
    // return this.loginService.getCurrentUsername
  }

  updateCurrentUser(data: NewUser) { 
    this.userList = [data];
    this.subjectCurrentUser$.next(this.userList);
  }

  getCurrentUser(): Observable<NewUser[]> {
    return this.subjectCurrentUser$.asObservable();
  }

}
