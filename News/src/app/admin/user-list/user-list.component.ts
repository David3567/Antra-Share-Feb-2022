import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.model';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userlist!: UserInterface[];

  current!: UserInterface;

  constructor(private userlistService: UserlistService) { }

  ngOnInit(): void {
    this.userlistService.getUsers().subscribe((data: UserInterface[]) => {
      this.userlist = data;
      this.current = data[0]
    });
  }

  async deleteUser(id: number) {
    this.userlist = await this.userlist.filter((user) => user.id !== id)
  }

  showUser(user: UserInterface) {
    this.current = user;
  }

}
