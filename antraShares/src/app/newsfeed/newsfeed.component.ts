import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  listStatus: boolean = false;
  actualPosts = [1, 1, 1, 1, 1, 1, 1, 1]
  constructor() { }

  ngOnInit(): void {
  }

  toggleLikelist() {
    this.listStatus = !this.listStatus;
  }

}
