import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Users } from '../interfaces/userlist.model';

import { UserinforService } from '../services/userinfor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users!: Users[];

  userDetail! :Users;

  constructor(private userinforService: UserinforService) {}

  ngOnInit(): void {
    this.userinforService.getUsers().subscribe((data: Users[]) => {
      this.users = data;
    });
  }
  onDeleteBtn(id:number){
    console.log(id);
  }
  onUserDetail(user:Users){
    this.userDetail= user;
  }
}
