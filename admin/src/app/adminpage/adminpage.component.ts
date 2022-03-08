import { Component, OnInit } from '@angular/core';
import { Users } from '../interface/interface.model';
import { UserlistService } from '../service/userlist.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  userlist!: Users[];
  userinfos!: Users;
  userid!: any;

  constructor(private userlistService: UserlistService) { }

  ngOnInit(): void {
    this.userlistService.getUser().subscribe((data: any) => {
      this.userlist = data;
    });
  }

  deleteUser(id: number) {
    console.log('todolist: todo item id is ', id);
    this.userlist = this.userlist.filter((user) => user.id !== id);
  }

  getInfo(id: number){
    this.userid = id;
    this.userinfos = this.userlist[this.userid - 1];
    console.log(this.userinfos);
  }
}
