import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  userurl!: {id:string, name:string};

  userDetail!: Users;
  securityObj: AppUserAuth = new AppUserAuth();
  constructor(
    private userinforService: UserinforService,
    private securityService: SecurityService,
    private activatedRoute: ActivatedRoute,
    private route : Router,
  ) {
    this.securityObj = this.securityService.securityObj;
  }

  ngOnInit(): void {
    this.userinforService.getUsers().subscribe((data: Users[]) => {
      this.users = data;
    });
  }
  onDeleteBtn(user: Users) {
    console.log(user._id)
    this.users = this.users.filter((t) => t._id !== user._id);
    // this.userinforService.deleteUser(user).subscribe(() => {
      
    // });
  }
  onUserDetail(user: Users) {
    this.userDetail = user;
    this.route.navigate(['/admin','userinfo', user._id]);
  }
}
