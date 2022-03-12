import { Component, Input, OnInit } from '@angular/core';
import { userTemplate } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css'],
})
export class UserInfoPanelComponent implements OnInit {
  @Input() userinfo: userTemplate;

  constructor() {}

  ngOnInit(): void {}
}
