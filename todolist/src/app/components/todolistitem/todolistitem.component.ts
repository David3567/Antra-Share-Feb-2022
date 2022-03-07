import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.model';

@Component({
  selector: 'app-todolistitem',
  templateUrl: './todolistitem.component.html',
  styleUrls: ['./todolistitem.component.scss']
})
export class TodolistitemComponent implements OnInit {

  @Input() todo!:Todo;
  @Output() todoIDEmiter = new EventEmitter();
  @Output() todoCompleteIdEmiter = new EventEmitter();

  textDecorator:string = "none";

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo()
  {
    this.todoIDEmiter.emit(this.todo.id);
  }

  markComplete()
  {
    this.textDecorator = "line-through"
    this.todoCompleteIdEmiter.emit(this.todo.id);
  }

}
