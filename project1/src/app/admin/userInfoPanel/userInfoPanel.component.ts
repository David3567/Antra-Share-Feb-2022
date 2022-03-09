import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userInfoPanel',
  templateUrl: './userInfoPanel.component.html',
  styleUrls: ['./userInfoPanel.component.scss']
})

export class UserInfoPanelComponent implements OnInit {

  @Input() DisplayUserDetail: any;
  
  i = 0;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.i++;
  }

  disablePipeSort() {
    return 0;
  }
}

