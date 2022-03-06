import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.model';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist! : Todo[];
  text!:string;


  constructor( private todolistService : TodolistService) { }

  ngOnInit(): void {
    //help get data
    this.todolistService.getTodos().subscribe((data : Todo[])=>{
      this.todolist = data;
    })
    
  }
  deleteTodo(id:number){
    // console.log(id)
    this.todolist = this.todolist.filter((todo)=>todo.id !==id)
  }
  keyUp(event:any){
    if(this.text !== ''){
      const newtodo ={
        "userId": 1,
        "title": this.text,
        "completed": false,
      }
      console.log(this.text);
      this.todolistService.addTodo(newtodo).subscribe((todo: Todo)=>{
        // this.todolist.push(todo);
        this.todolist = [todo, ...this.todolist];
        console.log(newtodo);
      })
      this.text ='';
    }
  }

}
