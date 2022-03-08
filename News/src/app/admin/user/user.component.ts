import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserInterface;
  @Output() userEvent = new EventEmitter;

  constructor() { 
    this.user = {} as UserInterface;
    this.userEvent = new EventEmitter<UserInterface>();
  }

  ngOnInit(): void {
  }

  clickDelete() {
    this.userEvent.emit(this.user.id);
  }

  clickShow() {
    this.userEvent.emit(this.user);
  }
}
