import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';

import { User } from '../../interfaces/user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit {
  @Input() userDetailed!: User[];
  @Output() userInfoEmiter = new EventEmitter();
  constructor(private userlistService: UserlistService) {}

  ngOnInit(): void {
    console.log('abc: ', this.userDetailed);
  }

  clickdelete() {}

  showinfo(e: any) {
    //console.log('this userinfo:', e);
    this.userInfoEmiter.emit(e);
  }
  clicktest() {
    console.log('you click', this.userDetailed);
  }
}
