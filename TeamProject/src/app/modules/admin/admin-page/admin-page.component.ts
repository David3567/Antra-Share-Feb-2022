import { Component, OnInit } from '@angular/core';
import { usersTemplate } from 'src/app/interfaces/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  userList: usersTemplate[];

  userToShow: usersTemplate;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.userList = users;
      this.userToShow = users[0];
    })
  }

  showUserDetails(selectedUser: usersTemplate) {
    this.userToShow = selectedUser;
    // console.log(this.userToShow);
    // console.log(this.userToShow._id);
  }

  deleteUser(id: string) {
    console.log(id);
    this.userList = this.userList.filter((user) => user._id !== id);
  }

}
