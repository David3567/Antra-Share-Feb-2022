import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.model';
@Component({
  selector: 'app-user-detailed-info-panel',
  templateUrl: './user-detailed-info-panel.component.html',
  styleUrls: ['./user-detailed-info-panel.component.css'],
})
export class UserDetailedInfoPanelComponent implements OnInit {
  @Input() userDetailed!: User[];
  constructor() {}

  ngOnInit(): void {
    console.log('hiiii', this.userDetailed);
  }
}
