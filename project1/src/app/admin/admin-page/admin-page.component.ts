import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, reduce } from 'rxjs';
import { User } from '../users.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

//@Injectable()
export class AdminPageComponent implements OnInit {
  
  url = 'http://localhost:3000/users'
  
  public user: User[] = [];
  // public DisplayUserDetail: string[] = []; 
  DisplayUserDetail = {};

  test = this.user;
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
    //also deletes items with same userid in other arrays - todos, posts
    this.http.delete(this.url + '/' + id).subscribe(
      result => {
        console.log('item deleted');
        this.getUsers();
        console.log(this.url + '/' + id);
      }
    )
  }

  sendUserInfo(item: any) {
    console.log(item);
    this.DisplayUserDetail = {
      name: null,
      id: null,
      ...item
    };
    console.log(this.DisplayUserDetail);
    
    // if(this.DisplayUserDetail.length != 0) {
    //   this.DisplayUserDetail = [];
    // }
    // this.DisplayUserDetail.push('UserID: ' + this.user[id-1].id);
    // this.DisplayUserDetail.push('Name: ' + this.user[id-1].name);
    // this.DisplayUserDetail.push('Username: ' + this.user[id-1].username);
    // this.DisplayUserDetail.push('Email: ' + this.user[id-1].email);
    // this.DisplayUserDetail.push('Address: ' + this.user[id-1].address.street + ', ' + this.user[id-1].address.suite + ', ' + this.user[id-1].address.city + ', ' + this.user[id-1].address.zipcode);
    // this.DisplayUserDetail.push('Lattitude / Longitude: ' + this.user[id-1].address.geo.lat + ' / ' + this.user[id-1].address.geo.lng);
    // this.DisplayUserDetail.push('Phone: ' + this.user[id-1].phone);
    // this.DisplayUserDetail.push('Website: ' + this.user[id-1].website);
    // this.DisplayUserDetail.push('Company Name: ' + this.user[id-1].company.name);
    // this.DisplayUserDetail.push('Company Slogan: ' + this.user[id-1].company.catchPhrase);
    // this.DisplayUserDetail.push('Company Type: ' + this.user[id-1].company.bs);
  }
}