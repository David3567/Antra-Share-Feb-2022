import { Component, OnInit } from '@angular/core';
import { UserlistService } from './services/userlist.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userlist!: any;
  
  constructor(private userListService: UserlistService) {}

  ngOnInit(): void {
    this.userListService.getUsers().subscribe((data: any) => {
      this.userlist = data;
      console.log(this.userlist);
    });
  }
}
