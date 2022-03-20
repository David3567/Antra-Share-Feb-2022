import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  liststatus:boolean = false;
  test = [0, 1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.liststatus = !this.liststatus;
  }
}