import { Component, OnInit } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit {
  newsList: newsTemplate[];
  likedStories: newsTemplate[] = [];

  constructor(private newsService: NewsfeedService) { }

  ngOnInit(): void {

    this.newsService.getNews().subscribe((news) => this.newsList = news.reverse());
  }

  onLike(favorite: string) {
    if (this.likedStories.find((likedStory) => likedStory._id === favorite)) {
      this.likedStories = this.likedStories.filter((likedStory) => likedStory._id !== favorite);
    } else {
      this.likedStories.push(this.newsList.find((story) => story._id === favorite));
    }
  }

  onUpdateLikedStories(updatedLikedStories: any) {
    this.likedStories = updatedLikedStories;
  }

  onUpdateNewStory(newStory: newsTemplate) {
    this.newsList.unshift(newStory);
  }

  onDeleteStory(id: string) {
    this.newsList = this.newsList.filter((story) => id !== story._id);
  }
}
