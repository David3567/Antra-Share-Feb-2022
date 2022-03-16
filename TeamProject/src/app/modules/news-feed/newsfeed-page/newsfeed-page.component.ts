import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit {
  newsList: any;
  likedStories: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4231/api/news').subscribe(stories => {
      this.newsList = stories;
  })
  }

  onLike(favorite: Event) {
    if(this.likedStories.find((likedStory) => likedStory._id === favorite)) {
      this.likedStories = this.likedStories.filter((likedStory) => likedStory._id !== favorite);
    } else {
      this.likedStories.push(this.newsList.find((story) => story._id === favorite));
    } 
  }

  onUpdateLikedStories(updatedLikedStories: any) {

    this.likedStories = updatedLikedStories;
  }
}
