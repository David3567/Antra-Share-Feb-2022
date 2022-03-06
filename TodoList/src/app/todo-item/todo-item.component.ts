import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interface/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() idEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.idEmitter.emit(this.todo.id);
  }

}
