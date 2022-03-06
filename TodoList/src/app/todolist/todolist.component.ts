import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Todo } from '../interface/todo.model';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodolistService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todoList: Todo[])=> {this.todoList = todoList.slice(0,10).reverse()});
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  addNewTodo(e: any) {
    if(e.key === "Enter" && e.target.value !== "") {
      this.todoList.unshift({
        userId: 1,
        id: this.todoList.length+1,
        title: e.target.value,
        completed: false
      });
      
      e.target.value = "";
    }
  }

}
