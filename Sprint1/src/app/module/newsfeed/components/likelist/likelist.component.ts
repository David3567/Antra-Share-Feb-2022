import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/services/interface/news.model';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.scss'],
})
export class LikelistComponent implements OnInit {
  @Input() story!: News;
  userID = '6205f461d5cf1c22aad415a6';
  // likedStories!: News[];
  @Output() removeStoryEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeStory() {
    this.story.likedIdList = this.story.likedIdList.filter((list) => list._id !== this.userID)
    console.log("list:", this.story);
    // this.removeStoryEmitter.emit(this.story);
  }
}
