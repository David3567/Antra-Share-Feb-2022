import { Component, OnInit, Input } from '@angular/core';
import { News } from '../models/news.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  likeStatus: string = "unlike";

  @Input() storyItem!: News;

  constructor() {
   }

  ngOnInit(): void {
  }

  likeClick() {
    if(this.likeStatus === "unlike") {
      this.likeStatus = "like";
      this.storyItem.likedIdList.push("1");
    }
    else if (this.likeStatus === "like") {
      this.likeStatus = "unlike";
      this.storyItem.likedIdList.shift();
    }
    console.log(this.storyItem.likedIdList);
  }

}
