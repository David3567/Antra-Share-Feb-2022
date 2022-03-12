import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/interface/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() userInfo!: User;
  @Output() deletedId = new EventEmitter();
  @Output() selectedId = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deletedId.emit(this.userInfo.id);
  }

  onSelected() {
    this.selectedId.emit();
  }



}
