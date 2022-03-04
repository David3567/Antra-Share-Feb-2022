import { Component, OnInit } from '@angular/core';
import { Content } from '../interface/content.model';

@Component({
  selector: 'app-hw1',
  templateUrl: './hw1.component.html',
  styleUrls: ['./hw1.component.scss']
})
export class Hw1Component implements OnInit {
  title: string = "Lorem ipsum";
  color: string = "black";
  id!: number;

  content: Content[] = [
    {
      title: "Lorem ipsum",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "blue",
      id: 1
    },
    {
      title: "Lorem ipsum",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "red",
      id: 2
    },
    {
      title: "Lorem ipsum",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "green",
      id: 3
    },
    {
      title: "Lorem ipsum",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "black",
      id: 4
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  clickChangeColor(content: Content){
    this.color = content.color
    this.id = content.id
  }

}
