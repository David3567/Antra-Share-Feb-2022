import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfo } from 'src/app/interfaces/userInfo.model';


@Component({
  selector: 'app-userInfoPanel',
  templateUrl: './userInfoPanel.component.html',
  styleUrls: ['./userInfoPanel.component.css']
})
export class UserInfoPanelComponent implements OnInit {
  @Input() userInfo!: UserInfo;
  @Output() userInfoEmiter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickdelete() {
    // console.log(this.todoitem.id);
    this.userInfoEmiter.emit(this.userInfo.name);
  }

}
