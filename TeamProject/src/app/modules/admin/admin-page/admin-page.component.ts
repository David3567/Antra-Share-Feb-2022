import { Component, OnInit } from '@angular/core';
import { userTemplate } from 'src/app/interfaces/user.model';
import { userDataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  userlist: userTemplate[] = [];
  selected: userTemplate;
  emptytmp = {
    password: '<null>',
    gender: '<null>',
    age: '<null>',
  };

  constructor(private userdata: userDataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userdata.getUser().subscribe((response) => {
      this.userlist = response;
    });
  }

  deleteUser(id: number) {
    this.userlist = this.userlist.filter((user) => user.id !== id);
  }

  displayUser(user: userTemplate) {
    this.selected = {
      ...this.emptytmp,
      ...user,
    };
  }
}
