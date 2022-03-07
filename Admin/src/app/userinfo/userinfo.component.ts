import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  @Input() userinfos!:User;
 
  constructor() { }

  ngOnInit(): void {
  }

}
