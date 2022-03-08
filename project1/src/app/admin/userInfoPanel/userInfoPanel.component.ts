import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users';

@Component({
  selector: 'app-userInfoPanel',
  templateUrl: './userInfoPanel.component.html',
  styleUrls: ['./userInfoPanel.component.scss']
})
export class UserInfoPanelComponent implements OnInit {

  @Input() DisplayUser:String[] = [];


  constructor() { }

  ngOnInit() {
  }

  showDetail(id: number) {
    if(this.DisplayUser.length != 0) {
      this.DisplayUser = [];
    }
    console.log(this.DisplayUser);
  }
}
