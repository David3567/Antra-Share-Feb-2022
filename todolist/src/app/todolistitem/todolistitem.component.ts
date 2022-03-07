import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../interfaces/todo.model";

@Component({
  selector: 'app-todolistitem',
  templateUrl: './todolistitem.component.html',
  styleUrls: ['./todolistitem.component.css']
})
export class TodolistitemComponent implements OnInit {
  @Input() todoitem!: Todo;
  @Output() todoIdEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  clickdelete(){
    this.todoIdEmitter.emit(this.todoitem.id);
  }

}
