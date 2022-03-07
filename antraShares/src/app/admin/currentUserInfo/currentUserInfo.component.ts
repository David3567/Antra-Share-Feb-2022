import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentUserInfo',
  templateUrl: './currentUserInfo.component.html',
  styleUrls: ['./currentUserInfo.component.css']
})
export class CurrentUserInfoComponent implements OnInit {
  @Input() currentUser!: any;
  public buttonPressed:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
