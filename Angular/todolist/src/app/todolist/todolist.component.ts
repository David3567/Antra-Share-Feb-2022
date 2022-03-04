import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent implements OnInit {
  counter = 3;
  isdisabled = true;

  todolist: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.counter++;
    this.isdisabled = !this.isdisabled;
  }

  deletetodo(id: number) {
    console.log('todolist: todo item id is ', id);
    this.todolist = this.todolist.filter((todo) => todo.id !== id);
  }
}
