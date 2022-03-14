import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.less']
})
export class UserdetailComponent implements OnInit {

  @Input() user!:User;

  constructor() { }

  ngOnInit(): void {
  }

}
