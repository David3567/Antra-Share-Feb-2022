import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users';

@Component({
  selector: 'app-userInfoPanel',
  templateUrl: './userInfoPanel.component.html',
  styleUrls: ['./userInfoPanel.component.scss']
})
export class UserInfoPanelComponent implements OnInit {

  @Input() DisplayUserDetail:String[] = [];


  constructor() { }

  ngOnInit() {
  }

  showDetail(id: number) {
    if(this.DisplayUserDetail.length != 0) {
      this.DisplayUserDetail = [];
    }
    console.log(this.DisplayUserDetail);
  }
}
