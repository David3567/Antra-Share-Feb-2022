import { Component, Input, OnInit } from '@angular/core';
import { News } from '../news.model';
import { newsData } from '../news.service';

@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
})
export class MainnewsComponent implements OnInit {
  // get data from service in root 
  @Input() news: News[] = newsData;
  titleColor = "red";

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color:string) {
    this.titleColor = color;
    // console.log(color);
  }

}
