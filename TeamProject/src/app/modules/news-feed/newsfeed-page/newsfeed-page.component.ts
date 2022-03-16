import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit {
  storiesList: any;
  likedStories: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4231/api/news').subscribe(stories => {
      this.storiesList = stories;
  })
  }

  onLike(favorite: Event) {
    
    this.likedStories.push(this.storiesList.find(story => story._id, favorite));
  }

}
