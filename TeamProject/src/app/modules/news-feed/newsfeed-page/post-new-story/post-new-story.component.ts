import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { JWTDecoderService } from 'src/app/services/jwt-decoder.service';
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
    private decoderService: JWTDecoderService
  ) { }

  ngOnInit(): void { }

  postNewStory(newPost: HTMLInputElement) {
    this.newStory = {
      "publisherName": this.decoderService.getCurrentUser().userName,
      "content": {
        "text": newPost.value
      },
    }

    this.newsService.postNews(this.newStory).subscribe((response) => {
      this.storyEmitter.emit(response["body"]);
    })

    newPost.value = "";
  }
}
