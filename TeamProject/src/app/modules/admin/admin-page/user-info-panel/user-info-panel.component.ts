import { Component, Input, OnInit } from '@angular/core';
import { usersTemplate } from 'src/app/interfaces/users.model';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css']
})
export class UserInfoPanelComponent implements OnInit {
  @Input() userDetails: usersTemplate;

  constructor() { }

  ngOnInit(): void {}

}
