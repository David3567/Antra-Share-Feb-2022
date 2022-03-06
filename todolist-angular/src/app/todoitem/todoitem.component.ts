import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { Todo } from '../interfaces/todo.model';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todoitem! :Todo;
  @Output() deleteTodo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.deleteTodo.emit(this.todoitem.id);
  }
}
