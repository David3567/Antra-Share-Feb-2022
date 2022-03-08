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
  selected: userTemplate[] = [];

  constructor(private userdata: userDataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userdata.getUser().subscribe((response) => {
      this.userlist = response;
      console.log(response);
    });
  }

  deleteUser(id: number) {
    console.log(id);
    this.userlist = this.userlist.filter((user) => user.id !== id);
    console.log(this.userlist);
  }

  displayUser(user: any) {
    this.selected = user;
    //add null value to address missing key(s) from api
    this.selected['missing'] = '<null>';
    console.log(this.selected);
  }
}
