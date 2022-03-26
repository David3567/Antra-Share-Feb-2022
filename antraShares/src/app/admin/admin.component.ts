import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppUserAuth } from '../interfaces/app-user.model';
import { Users } from '../interfaces/userlist.model';
import { SecurityService } from '../services/security.service';
import { UserinforService } from '../services/userinfor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users!: Users[];

  userDetail!: Users;
  securityObj: AppUserAuth = new AppUserAuth();
  constructor(
    private userinforService: UserinforService,
    private securityService: SecurityService
  ) {
    this.securityObj = this.securityService.securityObj;
  }

  ngOnInit(): void {
    this.userinforService.getUsers().subscribe((data: Users[]) => {
      this.users = data;
    });
  }
  onDeleteBtn(user: Users) {
    this.userinforService.deleteUser(user).subscribe(() => {
      this.users = this.users.filter((t) => t.id !== user.id);
    });
  }
  onUserDetail(user: Users) {
    this.userDetail = user;
  }
}
