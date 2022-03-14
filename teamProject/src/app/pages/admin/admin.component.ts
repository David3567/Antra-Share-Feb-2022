import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit, OnDestroy {

  userlist!:User[];
  emptyUser:User = {
    id:-1,
    name:"",
    username:"",
    email:"",
    address:{
      street:"",
      city:"",
      suite:"",
      zipcode:"",
      geo:{
        lat:1,
        lng:1
      }
    },
    phone:"",
    website:"",
    company:{
      name:"",
      catchPhrase:"",
      bs:""
    }
  }
  selectedUser:User = this.emptyUser;
  selectedList!:boolean[];
  selected:boolean = false;

  constructor(public userListService:UserlistService) { 
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.userListService.getUsersFromDB()
    .subscribe((data:any)=>{
      this.userlist = data;
      console.log("Userlist: ", this.userlist);
      this.selectedList = new Array(this.userlist.length).fill(false);
      console.log("selectedlist: ",this.selectedList)
      console.log("data: ", data)
    })
  }

  ngOndestroy(){
  }

  deleteUser(id:number){
    this.userlist = this.userlist.filter((user)=>{return user.id!==id});
    this.selectedUser = this.emptyUser;
  }

  selectUser(user:User){
    this.selectedUser = user;
    let arr:boolean[] = new Array(this.userlist.length).fill(false);
    this.selectedList = arr;
    this.selectedList[user.id-1] = true;
    this.selected = true;
  }

  unSelectSingleUser(){
    this.selected = false;
    let arr:boolean[] = new Array(this.userlist.length).fill(false);
    this.selectedList = arr;
    this.selectedUser = this.emptyUser;
  }
}
