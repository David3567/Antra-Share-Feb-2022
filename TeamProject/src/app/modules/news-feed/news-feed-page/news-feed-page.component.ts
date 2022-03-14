import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed-page',
  templateUrl: './news-feed-page.component.html',
  styleUrls: ['./news-feed-page.component.css'],
})
export class NewsFeedPageComponent implements OnInit {
  status: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.status = !this.status;
  }
}
