import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit {

  newsList: any[];
  likedStories: any[] = [];

  constructor() { }

  ngOnInit(): void {}
}
