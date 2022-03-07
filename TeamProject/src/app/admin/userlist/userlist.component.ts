import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  @Input() userinfo!: User;
  @Output() userInfoEmiter = new EventEmitter();
  @Output() userDeleteEmiter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitId(){
    this.userInfoEmiter.emit(this.userinfo.id);
  }

  emitDeleteId(){
    this.userDeleteEmiter.emit(this.userinfo.id);
  }

}