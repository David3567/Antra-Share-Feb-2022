import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces/todo.model';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem!: Todo;
  @Output() todoIdEmiter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickdelete() {
    // console.log(this.todoitem.id);
    this.todoIdEmiter.emit(this.todoitem.id);
  }
}
