import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, reduce } from 'rxjs';
import { User } from '../users.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent implements OnInit {
  
  url = 'http://localhost:3000/users'
  
  public user: User[] = [];

  DisplayUserDetail = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get< User[] >(this.url).subscribe(result => {
      this.user = result;
    });
  }

  deleteUser(id: number) {
    this.http.delete(this.url + '/' + id).subscribe(
      result => {
        this.getUsers();
      }
    )
  }

  sendUserInfo(item: any) {
    
    this.DisplayUserDetail = {
      name: null,
      id: null,
      ...item
    };
  }
}