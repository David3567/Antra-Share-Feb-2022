import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../admin/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  @Output() tagClickedEvent = new EventEmitter<User>();

  constructor() { }

  getUserInfoEvent(user:User) {
    this.tagClickedEvent.emit(user);
  }

}
