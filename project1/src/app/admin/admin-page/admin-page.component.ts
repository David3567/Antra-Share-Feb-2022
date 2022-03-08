import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

@Injectable()
export class AdminPageComponent implements OnInit {
  
  url = 'http://localhost:3000/users'
  
  public user: User[] = [];
  public DisplayUser: string[] = []; 

  test = this.user;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get< User[] >(this.url).subscribe(result => {
      this.user = result;
      console.log(this.user);
    });
  }

  deleteUser(id: number) {
    this.user.splice(id, 1);
    /*below gives 404 error*/
    // this.http.delete< User[] >(this.url).subscribe(result => {
    //   this.user = result;
    //   console.log(this.user);
    // })
  }

  sendUserInfo(id: number) {
    if(this.DisplayUser.length != 0) {
      this.DisplayUser = [];
    }
    this.DisplayUser.push('UserID: ' + this.user[id-1].id);
    this.DisplayUser.push('Name: ' + this.user[id-1].name);
    this.DisplayUser.push('Username: ' + this.user[id-1].username);
    this.DisplayUser.push('Email: ' + this.user[id-1].email);
    this.DisplayUser.push('Address: ' + this.user[id-1].address.street + ', ' + this.user[id-1].address.suite + ', ' + this.user[id-1].address.city + ', ' + this.user[id-1].address.zipcode);
    this.DisplayUser.push('Lattitude / Longitude: ' + this.user[id-1].address.geo.lat + ' / ' + this.user[id-1].address.geo.lng);
    this.DisplayUser.push('Phone: ' + this.user[id-1].phone);
    this.DisplayUser.push('Website: ' + this.user[id-1].website);
    this.DisplayUser.push('Company Name: ' + this.user[id-1].company.name);
    this.DisplayUser.push('Company Slogan: ' + this.user[id-1].company.catchPhrase);
    this.DisplayUser.push('Company Type: ' + this.user[id-1].company.bs);
  }
}