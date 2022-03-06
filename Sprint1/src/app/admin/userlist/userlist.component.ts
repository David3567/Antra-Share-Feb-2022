import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  @Input() userinfo!: User;
  @Output() userInfoEmiter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitId(){
    this.userInfoEmiter.emit(this.userinfo.id);
  }
}
