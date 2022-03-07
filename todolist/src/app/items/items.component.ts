import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interface/interface.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() todoitem!: Todo;
  @Output() todoIdEmiter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deletebtn(){
    this.todoIdEmiter.emit(this.todoitem.id);
  }

}
