import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { News } from 'src/app/services/interface/news.model';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  userID = '6205f461d5cf1c22aad415a6';
  liststatus: boolean = false;
  newslist!: News[];

  constructor(private newsFeedService: NewsfeedService) {}

  ngOnInit(): void {
    this.newsFeedService
      .getNews()
      .subscribe((news: News[]) => (this.newslist = news));
    console.log(this.newslist);

  }

  onClick() {
    this.liststatus = !this.liststatus;
  }

  likedList(): News[] {
    // this.likedStories = this.likedStory?.filter((story) => {
    //     // story._id !== this.userID;
    //     story.likedIdList.includes({_id:this.userID});
    // });
    // console.log("Test here",this.likedStories);
    //  return this.likedStory?.filter((story) => {
    //     story.likedIdList.find((list)=>{list._id !== this.userID})? true : false;
    //   });
    // return this.likedStories;
    return this.newslist?.filter((story) => {
          story.likedIdList.includes({_id:this.userID});
      });
    // return this.story;
  }
}
