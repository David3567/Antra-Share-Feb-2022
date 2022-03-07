import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../service/userlist.service';
import { Users } from './interface/interface.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userlist!: Users[];
  user!: Users;
  userid!: number;

  constructor(private userlistService: UserlistService) { }

  ngOnInit(): void {
    this.userlistService.getUser().subscribe((data: any) => {
      this.userlist = data;
      this.user = this.userlist[0];
    });
  }

  deleteUser(id: number) {
    console.log('todolist: todo item id is ', id);
    this.userlist = this.userlist.filter((user) => user.id !== id);
  }

  getInfo(searchid: number){
    this.user = this.userlist.filter((findId) => {return findId.id === searchid;})[0];
  }

}
