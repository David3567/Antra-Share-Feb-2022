import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces/todo.model';
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css'],
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem!: Todo;
  @Output() todoIdEmiter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickdelete() {
    this.todoIdEmiter.emit(this.todoitem.id);
  }
}
