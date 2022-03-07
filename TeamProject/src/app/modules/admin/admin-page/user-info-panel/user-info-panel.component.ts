import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css']
})
export class UserInfoPanelComponent implements OnInit {
  @Input() userDetails: any;

  constructor() { }

  ngOnInit(): void {
    this.userDetails = {name: "Test", username: "testUsername",email: "testEmail"};
  }

}
