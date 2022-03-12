import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userTemplate } from 'src/app/interfaces/user.model';
import { userDataService } from 'src/app/services/userdata.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  userlist$: Observable<userTemplate[]>;
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
    this.userlist$ = this.userdata.getUser();
  }

  deleteUser(id: number) {
    this.userlist$ = this.userlist$.pipe(
      map((users) => users.filter((user) => user.id !== id))
    );
  }

  displayUser(user: userTemplate) {
    this.selected = {
      ...this.emptytmp,
      ...user,
    };
  }
}
