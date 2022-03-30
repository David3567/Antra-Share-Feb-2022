import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.model';
import { TodolistService } from '../services/todolist.service';
import * as TodoActions from 'src/app/Ngrx/todo.actions';
import * as TodoSelectors from 'src/app/Ngrx/todo.selector';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent implements OnInit {
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;
  newtodo = new Todo();

  todolist!: Todo[];

  constructor(private todolistService: TodolistService, private store: Store) {}

  ngOnInit(): void {
    // this.store.dispatch(TodoActions.initTodolist());
    this.store.dispatch(TodoActions.loadTodolist());

    this.store
      .select(TodoSelectors.getTodoList)
      .subscribe((todolist: Todo[]) => {
        this.todolist = todolist;
      });

    // this.todolistService.getTodos().subscribe((data: Todo[]) => {
    //   this.todolist = data;
    // });
  }

  add() {
    this.todolistService
      .addTodo(this.newtodo)
      .pipe(
        tap((val) => {
          this.todolist = [val, ...this.todolist];
        })
      )
      .subscribe();
  }

  deletetodo(id: number) {
    console.log('todolist: todo item id is ', id);
    this.todolist = this.todolist.filter((todo) => todo.id !== id);
  }
}
