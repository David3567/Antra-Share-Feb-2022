import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.model';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todolist!: Todo[];

  constructor(private todolistService: TodolistService) {}

  ngOnInit(): void {
    this.todolistService.getTodos().subscribe((data: Todo[]) => {
      this.todolist = data;
    });
  }
  addItem(event: any) {
    console.log(event.target.value);
    if (event.target.value != '') {
      this.todolist.unshift({
        userId: 1,
        id: this.todolist.length + 1,
        title: event.target.value,
        completed: false,
      });
      console.log(this.todolist[0].id);
    }
    event.target.value = '';
  }
  deletetodo(id: number) {
    console.log('todolist: todo item id is ', id);
    this.todolist = this.todolist.filter((todo) => todo.id !== id);
  }
}
