import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/interfaces/userlist.model';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent implements OnInit {
  //get data from admin c
  // @Input() item = "";

  @Input() userDetail! :Users;

  // @Output() deleteUserBtn = new EventEmitter();

  
  constructor() {}

  ngOnInit(): void {
  }
  // onDeleteBtn(){
  //   this.deleteUserBtn.emit(this.user.id);
  // }
  // onUserDetail(){
  //   this.userDetail.emit(this.user.id);
  // }
}
