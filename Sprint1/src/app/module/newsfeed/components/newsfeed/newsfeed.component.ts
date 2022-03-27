import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { News } from 'src/app/services/interface/news.model';
import { ShowstoryComponent } from '../showstory/showstory.component';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  userID = '6205f461d5cf1c22aad415a6';
  liststatus: boolean = false;
  newslist!: News[];
  likedStories: News[] = [];

  constructor(private newsFeedService: NewsfeedService) {}

  ngOnInit(): void {
    this.newsFeedService
      .getNews()
      .subscribe((news: News[]) => (this.newslist = news));
    // console.log(this.newslist);
  }

  onClick() {
    this.liststatus = !this.liststatus;
  }

  onShowUpdate(id: string) {
    if (this.likedStories.find((likedStory) => likedStory._id === id)) {
      this.likedStories = this.likedStories.filter(
        (likedStory) => likedStory._id !== id
      );
    } else {
      this.likedStories.push(
        this.newslist.find((story) => story._id === id)!
      );
    }
  }

  onListRemove(id: string) {
    this.likedStories = this.likedStories.filter((story)=>story._id !== id);

    for( let story of this.newslist){
      if(story.likedIdList.find((list)=>list._id===this.userID) && story._id === id){
        story.likedIdList = story.likedIdList.filter((list)=> list._id !== this.userID)
      }
    }
  }
}
