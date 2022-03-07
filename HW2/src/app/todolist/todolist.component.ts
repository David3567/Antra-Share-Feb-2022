import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';
import { Todo } from "../interfaces/todo.model";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoList!: Todo[];

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.todolistService.getTodos().subscribe((data: any) => {
      this.todoList = data;
    });
  }

  addNewTodo(e: any) {
    if (e.key === "Enter" && e.target.value !== "") {
      this.todoList.unshift({
        userId: 1,
        id: this.todoList.length + 1,
        title: e.target.value,
        completed: false
      });

      e.target.value = "";
    }
  }

deletetodo(id: number) {
  console.log("removed item with id ", id);
  this.todoList = this.todoList.filter((todo) => todo.id != id);
}

}