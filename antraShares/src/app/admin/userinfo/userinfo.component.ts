import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/interfaces/userlist.model';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent implements OnInit {

  @Input() userDetail! :Users;

  constructor() {

  }

  ngOnInit(): void {
    
  }
  
}
