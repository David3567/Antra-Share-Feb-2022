import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces';
import { TodolistService } from '../services/todolist.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  counter = 3;
  isdisabled = true;
  todolist!: Todo[];
  newtodo!: Todo; 
  addvalue!:string;

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
  addtodo(e: any){
    // if (e.key === 'Enter')
      // console.log(e.target.value);
    this.newtodo = {
      title: this.addvalue, // <------
      userId: 1,
      completed: false
    }
    this.todolistService.addTodo(this.newtodo).subscribe((todo: Todo) => {
      this.todolist = [todo, ...this.todolist];
    });
  }
}
