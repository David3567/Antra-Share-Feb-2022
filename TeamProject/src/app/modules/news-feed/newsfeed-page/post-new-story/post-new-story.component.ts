import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { LoginService } from 'src/app/services/login.service';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-post-new-story',
  templateUrl: './post-new-story.component.html',
  styleUrls: ['./post-new-story.component.css'],
})
export class PostNewStoryComponent implements OnInit {
  newStory: newsTemplate;
  @Output() storyEmitter = new EventEmitter();

  constructor(
    private newsService: NewsfeedService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  postNewStory(newPost: string) {
    this.newStory = {
      "publisherName": this.loginService.currentUser.userName,
      "content": {
        "text": newPost
      },
    }

    this.newsService.postNews(this.newStory).subscribe((response) => {
      this.storyEmitter.emit(response["body"]);
    })
  }
}
