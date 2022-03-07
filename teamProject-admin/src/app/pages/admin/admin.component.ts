import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {

  userlist!:User[];
  selected = false;
  emptyUser:User = {
    id:-1,
    name:"",
    username:"",
    email:"",
    address:{},
    phone:"",
    website:"",
    company:{}
  }
  selectedUser:User = this.emptyUser;

  constructor(public userListService:UserlistService) { 
    this.userListService.getUsersFromDB().subscribe((data:any)=>{
      this.userlist = data;
      console.log("Userlist: ", this.userlist);
      console.log("data: ", data)
    })
    this.userlist = userListService.getUser();
    console.log(this.userlist)
  }

  ngOnInit(): void {
  }

  deleteUser(id:number){
    this.userlist = this.userlist.filter((user)=>{return user.id!==id});
    this.selectedUser = this.emptyUser;
  }

  selectUser(user:User){
    this.selected = true;
    this.selectedUser = user;
  }

}
