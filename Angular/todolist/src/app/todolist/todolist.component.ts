import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.model';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent implements OnInit {
  counter = 3;
  isdisabled = true;

  todolist!: Todo[];

  constructor(private todolistService: TodolistService) {}

  ngOnInit(): void {
    this.todolistService.getTodos().subscribe((data: Todo[]) => {
      this.todolist = data;
    });
  }

  add() {
    this.counter++;
    this.isdisabled = !this.isdisabled;
  }

  deletetodo(id: number) {
    console.log('todolist: todo item id is ', id);
    this.todolist = this.todolist.filter((todo) => todo.id !== id);
  }
}
