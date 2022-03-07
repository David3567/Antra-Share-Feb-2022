import { Component, OnInit } from '@angular/core';
import { UserlistService } from './services/userlist.service';
import { User } from './interfaces/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userlist!: User[];
  selectedUser!: User;
  selectedUserId!: number;

  constructor(private userlistservice: UserlistService) { }

  ngOnInit(): void {
    this.userlistservice.getUsers().subscribe((data: User[]) => {
      this.userlist = data;
      console.log(this.userlist);
      this.selectedUser = this.userlist[0];
    });
  }

  selectUser(selecteduserid: number) {
    this.selectedUser = this.userlist.filter((search) => {
      return search.id == selecteduserid;
    })[0];

    this.selectedUserId = this.selectedUser.id;
  }

}
