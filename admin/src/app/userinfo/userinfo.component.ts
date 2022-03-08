import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from '../interface/interface.model';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  @Input() userinfo!: Users;
  @Output() userinfoEmiter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  userInfo(){
    this.userinfoEmiter.emit(this.userinfo.id);
  }

}
