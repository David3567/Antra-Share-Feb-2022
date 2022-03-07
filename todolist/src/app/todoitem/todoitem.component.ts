import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../interfaces/todo.model';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem: TodoInterface;
  @Output() todoitemEvent = new EventEmitter;

  constructor() {
    this.todoitem = {} as TodoInterface;
    this.todoitemEvent = new EventEmitter<TodoInterface>();
  }

  ngOnInit(): void { }

  clickDelete() {
    this.todoitemEvent.emit(this.todoitem.id);
  }
}
