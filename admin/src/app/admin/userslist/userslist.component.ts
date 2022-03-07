import { Component, OnInit, Input } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';
import { User } from '../../interfaces/user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit {
  @Input() userlist!: User[];
  constructor(private userlistService: UserlistService) {}

  ngOnInit(): void {
    this.userlistService.getUsers().subscribe((data: User[]) => {
      this.userlist = data;
    });
  }

  clickdelete() {}
}
