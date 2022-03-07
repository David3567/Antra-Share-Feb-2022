import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.model';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  keyword!:string;
  todolist!:Todo[];
  length!:number;

  constructor(private todolistservice:TodoserviceService) { }

  ngOnInit(): void {
    this.todolistservice.getTodos().subscribe((data:any)=>{
      this.todolist = data;
      this.length = this.todolist.length;
    })
  }

  addtodo(key:KeyboardEvent){
    if(key.code=="Enter"){
    let id = this.useEndID();
    let todo!:Todo;
    todo={
      id:id,
      title:this.keyword,
      userId:id,
      completed:false
    }
    this.todolist.push(todo);
    this.keyword="";
    alert("new task added to the end.")
    }
  }

  useEndID():number{
    this.length ++;
    return this.length-1;
  }

  deleteTodo(id:number){
    this.todolist = this.todolist.filter((todo)=>{return todo.id!==id})
  }

  completeTodo(id:number){
    let todo = this.todolist.filter((todo)=>{return todo.id==id})
    todo[0].completed=true;
    console.log(todo[0].title+" is "+((todo[0].completed)?"Completed!":"Not Completed"))
  }

}
