import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  private userList!:any[];

  constructor(private http:HttpClient) { }

  getUsersFromDB(){
    return this.http.get("http://localhost:3000/users");
  }


  getUser(){
    console.log("service: ", this.userList)
    return this.userList;
  }

}
