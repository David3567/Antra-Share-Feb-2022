import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../interfaces/todo.model';
import { TodolistService } from '../service/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  id = 201;
  userId = 8
  todolist!: TodoInterface[];

  constructor(private todolistService: TodolistService) {}

  ngOnInit(): void {
    this.todolistService.getTodos().subscribe((data: TodoInterface[]) => {
      this.todolist = data;
    });
  }

  addtodo(newtodo: string) {
    if (!newtodo) return;

    let todo: TodoInterface = {
      userId: this.userId,
      id: this.id,
      title: newtodo,
      completed: false
    }

    this.todolist = [todo, ...this.todolist];
    this.id++;
  }

  deletetodo(id: number) {
    this.todolist = this.todolist.filter((todo) => todo.id !== id);
  }
}
