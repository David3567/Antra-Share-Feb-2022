import { Component, NgModule, OnInit, Input } from '@angular/core';
import { apiService } from '../services/api.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  isInfoVisible: boolean = true;
  userlist!: User[];

  constructor(private api: apiService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe((data: any) => {
      this.userlist = data;
    });
    
  }

  ngDoCheck(): void {
    console.log(this.isInfoVisible);
  }

  addUser() {

  }

  isInfoClicked(check:number) {
    if(check > 0) {
      this.isInfoVisible = true;
    }
  }

  deleteUser(id:number) {
    console.log(id);
  }

}
