import { Component, OnInit } from '@angular/core';
import { User } from './interface/user.model';
import { UserlistService } from '../services/userlist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userlist!: User[];
  // FocusUser = new User();
  FocusId!: number;
  newUser!: User;
  addFormStyle = 'none';
  // searchUser!: User[];

  constructor(private userListService: UserlistService) {}

  ngOnInit(): void {
    this.userListService.getUsers().subscribe((data: any) => {
      this.userlist = data;
    });
  }

  // getFocus(focusid: number) {
  //   this.FocusUser = this.userlist.filter((search) => {
  //     return search.id == focusid;
  //   })[0];
  //   this.FocusId = this.FocusUser.id;
  // }

  addUser(user: NgForm) {
    console.log(user);
  }
  // addUser(user: User) {
  //   this.userListService
  //     .addUsers(user)
  //     .subscribe((user: any) => this.userlist.push(user));
  //   this.userlist.push(user);
  // }

  oppenaddForm() {
    this.addFormStyle = 'block';
  }

  closeaddForm() {
    this.addFormStyle = 'none';
  }
  deleteUser(id: number) {
    this.userListService.deleteUser(id).subscribe();
    this.userlist = this.userlist.filter((search) => {
      return search.id !== id;
    });
  }
}
