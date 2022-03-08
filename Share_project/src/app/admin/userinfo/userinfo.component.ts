import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  user!: User;
  
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    let init: User = {
      "id": 0,
      "name": "",
      "username": "",
      "email": "",
      "address": "",
      "phone": "",
      "website": "",
      "company": ""
    };
    this.user = init;
    this.commonService.deleteClickedEvent.subscribe((data:User) => {
      console.log(data)
      this.user = data;
    });
  }

}
