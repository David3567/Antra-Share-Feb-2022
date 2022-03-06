import { Component, OnInit } from '@angular/core';
import { User } from './interface/user.model';
import { UserlistService } from '../services/userlist.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userlist!: User[];
  FocusUser!: User;
  FocusId!:number;
  searchUser!: User[];
  
  constructor(private userListService: UserlistService) {}

  ngOnInit(): void {
    this.userListService.getUsers().subscribe((data: any) => {
      this.userlist = data;
      console.log(this.userlist);
    });
  }
  getFocus(focusid: number) {
    this.FocusUser = this.userlist.filter((search) => {return search.id == focusid;})[0];
    console.log(this.FocusUser);
    this.FocusId = this.FocusUser.id;
    console.log('Focusid: ',this.FocusId);
  }
}
