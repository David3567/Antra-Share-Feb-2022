import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../admin/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  @Output() deleteClickedEvent = new EventEmitter<User>();

  constructor() { }

  deleteEvent(user:User) {
    this.deleteClickedEvent.emit(user);
  }

}
