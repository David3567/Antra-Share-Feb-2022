import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  @Input() userinfo!: User;

  constructor() { }
  ngOnInit(){}

}