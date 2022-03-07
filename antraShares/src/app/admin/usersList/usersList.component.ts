import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usersList',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css']
})
export class UsersListComponent implements OnInit {
  public hideDelete: boolean = false;
  @Input() userinfo!: any;
  @Output() uie = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitUID() {
    this.uie.emit({ data: this.userinfo.id, type: "emit" });
  }
  removeUID() {
    this.hideDelete = true;
    this.uie.emit({ data: this.userinfo.id, type: "remove" });
  }
}
