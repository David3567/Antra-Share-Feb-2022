import { Component, OnInit, } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  inputItem = '';
  todolist: Todo[] = [];

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.todoservice.getAllTodos().subscribe((todolist) => {
      this.todolist =todolist as Todo[];
    }) 
  }

  deletetodo(id: string) {
    console.log(id);
    this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    this.todoservice.deleteTodo(id);
  }

  addtodo() {
    const newtodo: Todo = {
      userId: '',
      title: this.inputItem,
      completed: false,
    };
    this.todoservice.addTodo(newtodo).subscribe((todo: Todo) => {
      this.todolist = [todo, ...this.todolist]; 
    });
    this.inputItem = '';
  }

}
