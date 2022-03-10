import { Component, OnInit } from '@angular/core';
import { AdminPageService } from '../admin-page.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  userList: any;

  userToShow: any= "";

  constructor(private userService: AdminPageService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users)=> {
      this.userList = users;
      this.userToShow = users[0];
    })
  }

  showUserDetails(selectedUser:any) {
    this.userToShow = selectedUser;
  }

  deleteUser(id:number) {
    this.userList = this.userList.filter((user)=> user.id !== id);
  }

}
