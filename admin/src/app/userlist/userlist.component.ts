import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from '../interface/interface.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @Input() userinfo!: Users;
  @Output() deleteEmiter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {}

  deletebtn(){
    this.deleteEmiter.emit(this.userinfo.id)
  }


}
