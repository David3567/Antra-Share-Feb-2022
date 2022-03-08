import { Component, Input, OnInit } from '@angular/core';
import { userTemplate } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css'],
})
export class UserInfoPanelComponent implements OnInit {
  //interface userInterface can't be used here since 'missing' key was added in parent
  @Input() userinfo: any;

  constructor() {}

  ngOnInit(): void {}
}
