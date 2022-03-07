import { Component, OnInit } from '@angular/core';
import { UserinforService } from 'src/app/services/userinfor.service';
import { UserInfo } from '../../interfaces/userInfo.model'
@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})
export class AdminPageComponent implements OnInit {
  counter = 3;
  isdisabled = true;

  userInfoList!: UserInfo[];
  constructor(private userInfoService: UserinforService) { }

  ngOnInit() {
    this.userInfoService.getUsers().subscribe((data: UserInfo[]) => {
      this.userInfoList = data;
      console.log(data)
    });
  }

  deleteUser(name: string) {
    console.log('deleting: ', name);
    this.userInfoList = this.userInfoList.filter((userInfo) => userInfo.name !== name);
  }

}
