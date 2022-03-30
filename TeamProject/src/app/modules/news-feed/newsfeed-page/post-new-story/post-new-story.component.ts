
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import jwt_decode from "jwt-decode";
import { newsTemplate } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
 
let token = localStorage.getItem('bearerToken');
let decoded: any = jwt_decode(token);
 


@Component({
  selector: 'app-post-new-story',
  templateUrl: './post-new-story.component.html',
  styleUrls: ['./post-new-story.component.css']
})
export class PostNewStoryComponent implements OnInit {
  
  newStory: newsTemplate;
  @Output() storyEmitter = new EventEmitter();

  constructor(private newsService: NewsfeedService) { }

  ngOnInit(): void {
  }

  postNewStory(newPost: string) {
    this.newStory = {
      "publisherName": decoded.userName,
      "content": {
          "text": newPost
        },
    }
    
    this.newsService.postNews(this.newStory).subscribe((response)=>{
      this.storyEmitter.emit(response.body);
    })
  }

}
