import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.model';
import { UserslistService } from '../services/userslist.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userslist!: User[];
  displayuser!: User;
  displayuserid!: number;

  constructor(private userlistservice: UserslistService) { }

  ngOnInit(): void {
    this.userlistservice.getUsers().subscribe((data: any) => {
      this.userslist = data;
      console.log(this.userslist);
      this.displayuser = this.userslist[0];
    });
  }

  displayUser(displayid: number) {
    this.displayuser = this.userslist.filter((search) => {
      return search.id == displayid;
    })[0];
    console.log(this.displayuser);
    this.displayuserid = this.displayuser.id;

  }

}
