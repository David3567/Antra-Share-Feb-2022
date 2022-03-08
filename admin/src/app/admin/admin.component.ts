import { Component, OnInit, Input } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';
import { User } from '../interfaces/user.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  userDetailed!: User[];
  constructor(private userlistService: UserlistService) {}

  ngOnInit(): void {
    this.userlistService.getUsers().subscribe((data: User[]) => {
      this.userDetailed = data;
      console.log('this is userdetail', this.userDetailed);
    });
  }
}
