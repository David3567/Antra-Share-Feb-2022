import { Component, OnInit } from '@angular/core';
import { UserinforService } from '../services/userinfor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usersList: any;
  focusUser: any;
  focusID: any;


  constructor(private UserinforService: UserinforService) { }

  ngOnInit(): void {
    this.UserinforService.getUsers().subscribe((data: any) => {
      //console.log(data);
      this.usersList = data;
      this.focusUser = this.usersList[0];
    });
  }
  wrapperFunction(rawEmitterData: any) {
    console.log("wrapperFunction", rawEmitterData, "")
    if (rawEmitterData.type === "remove") {
      this.deleteLogic(rawEmitterData.data)
    } else {
      this.getCurrentUser(rawEmitterData.data)
    }
  }
  getCurrentUser(focusid: any) {
    console.log("getCurrentUser", focusid, "")
    this.focusUser = this.usersList.filter((search: any) => { return search.id === focusid; })[0];
    console.log(this.focusUser);
    this.focusID = this.focusUser.id;
  }
  deleteLogic(focusid: any) {
    console.log("deleteLogic", focusid, "")
    this.focusUser = this.usersList.filter((search: any) => { return search.id === focusid; })[0];
    console.log(this.focusUser);
    this.focusID = this.focusUser.id;
    let index = this.usersList.indexOf(this.focusUser);
    delete this.usersList[index];
    console.log(this.usersList, index);
  }

}
