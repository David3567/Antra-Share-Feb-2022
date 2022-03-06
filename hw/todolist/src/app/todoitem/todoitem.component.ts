import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deletedId = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deletedId.emit(this.todo.id);
  }

}
