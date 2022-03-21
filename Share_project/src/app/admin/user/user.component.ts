import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Output() userIdEmitter = new EventEmitter ();
  @Output() isClickedEmitter = new EventEmitter();

  state:boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  clickInfo() {
    this.commonService.getUserInfoEvent(this.user);
    this.userIdEmitter.emit(this.user.id);
  }

  clickDelete() {
    this.userIdEmitter.emit(this.user.id);
  }

}
