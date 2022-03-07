import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @Input() user!: User;
  @Output() userEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  emitUserId() {
    this.userEmitter.emit(this.user.id);
  }

}
