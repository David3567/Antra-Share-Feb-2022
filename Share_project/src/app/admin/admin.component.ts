import { Component, NgModule, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})



export class AdminComponent implements OnInit {

  userlist!: User[];

  constructor(private HttpService: HttpService) { }

  ngOnInit(): void {
    this.HttpService.getUsers().subscribe((data: any) => {
      this.userlist = data;
    });
    
  }

  addUser() {

  }

  deleteUser() {}

}
