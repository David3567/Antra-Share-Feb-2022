import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() todoitem!: Todo; addvalue!:string;
  @Output() todoIdEmiter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickdelete() {
    // console.log(this.todoitem.id);
    this.todoIdEmiter.emit(this.todoitem.id);
  }

}
