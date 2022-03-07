import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  @Input() userinfo!: User;
  @Output() userInfoEmiter = new EventEmitter();
  @Output() userDeleteEmiter = new EventEmitter();

  constructor(private userListService: UserlistService) {}

  ngOnInit() {}

  emitId(){
    this.userInfoEmiter.emit(this.userinfo.id);
  }
  emitDeleteId(){
    this.userDeleteEmiter.emit(this.userinfo.id);
  }

}
