import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, AllData } from '../users';

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
    /*below gives 404 error*/
    // this.http.delete< User[] >(this.url).subscribe(result => {
    //   this.user = result;
    //   console.log(this.user);
    // })
  }

  showDetail(id: number) {
    if(this.DisplayUser.length != 0) {
      this.DisplayUser = [];
    }
    this.DisplayUser.push('UserName: ' + this.user[id-1].name);
    this.DisplayUser.push('UserEmail: ' + this.user[id-1].email);
  }
}