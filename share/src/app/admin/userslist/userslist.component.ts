import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserslistService } from 'src/app/services/userslist.service';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  @Input() userdetails!: User;

  @Output() userDetailsEmitter = new EventEmitter(); 

  constructor(private userslistservice: UserslistService) { }

  ngOnInit() { }
  
  emitUserId() {
    this.userDetailsEmitter.emit(this.userdetails.id);
  }
}
