import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewUser } from '../interface/newuser.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:4231/api/users';
  private getProfile = 'getProfile';

  userList: NewUser[]  = [];

  subjectCurrentUser$ = new BehaviorSubject(this.userList);

  constructor(private http: HttpClient) { }

  getProfiles(username: string) {
    return this.http.get([this.url, this.getProfile, username].join('/'));
  }

  updateCurrentUser(data: NewUser) { 
    this.userList = [data];
    this.subjectCurrentUser$.next(this.userList);
  }

  getCurrentUser(): Observable<NewUser[]> {
    return this.subjectCurrentUser$.asObservable();
  }

}
