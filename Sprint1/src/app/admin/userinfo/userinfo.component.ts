import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  @Input() showuser!:User;


  constructor() { }

  ngOnInit() {
    
  }

}
