import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interface/user.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  selectedUser!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
