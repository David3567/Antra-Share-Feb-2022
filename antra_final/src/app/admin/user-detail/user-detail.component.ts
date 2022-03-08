import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() userInfo!: User;

  constructor() { }

  ngOnInit(): void {
  }


}
