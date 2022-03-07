import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from '../interface/interface.model';
import { TodolistService } from '../service/todolist.service';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent implements OnInit {
  todolist!: Todo[];

  constructor(private todolistService: TodolistService) {}

  ngOnInit(): void {
    this.todolistService.getTodo().subscribe((data: Todo[]) => {
      this.todolist = data;
    });
  }

  deleteTodo(id: number) {
    console.log('todolist: todo item id is ', id);
    this.todolist = this.todolist.filter((todo) => todo.id !== id);
  }

  addTodo(todo: any){
    todo = {
      userId: 1,
      id: this.todolist.length + 1,
      title: todo.target.value,
      completed: false

    }
    this.todolist.unshift(todo);    
  }

}
