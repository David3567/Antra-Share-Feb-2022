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

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    console.log(123)
  }

  clickdelete() {
    this.commonService.deleteEvent(this.user);
  }

}
