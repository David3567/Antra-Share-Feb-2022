import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { News } from 'src/app/services/interface/news.model';
import { ShowstoryComponent } from '../showstory/showstory.component';
import { AppUserAuth } from 'src/app/core/services/interface/app-user-auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

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

  securityObj: AppUserAuth = new AppUserAuth();


  constructor(private newsFeedService: NewsfeedService, private authService: AuthService, private router: Router) {
    this.securityObj = this.authService.securityObj;
  }

  ngOnInit(): void {
    this.newsFeedService
      .getNews()
      .subscribe((news: News[]) => (this.newslist = news));
    // console.log(this.newslist);
    console.log(this.authService.securityObj);
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
