import { Component, Input, OnInit } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
})
export class MainnewsComponent implements OnInit {
  // get data from service in root 
  
  titleColor = "red";
  news: News[] = [
    {
        id: 1,
        title: 'subtitle 1',
        content: 'content 1',
        color: 'blue'
    },
    {
        id: 2,
        title: 'subtitle 2',
        content: 'content 2',
        color: 'black'
    },
    {
        id: 3,
        title: 'subtitle 3',
        content: 'content 3',
        color: 'red'
    },
    {
        id: 4,
        title: 'subtitle 4',
        content: 'content 4',
        color: 'green'
    }
]

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color:string) {
    this.titleColor = color;
    // console.log(color);
  }

}
