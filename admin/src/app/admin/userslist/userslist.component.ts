import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';

import { User } from '../../interfaces/user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit {
  @Input() userlist!: User[];
  @Output() userInfoEmiter = new EventEmitter();
  constructor(private userlistService: UserlistService) {}

  ngOnInit(): void {
    this.userlistService.getUsers().subscribe((data: User[]) => {
      this.userlist = data;
    });
  }

  clickdelete() {}

  showinfo(e: any) {
    console.log('this userinfo:', this.userlist);
    this.userInfoEmiter.emit(this.userlist);
  }
}
