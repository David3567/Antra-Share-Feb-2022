import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/services/interface/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.scss'],
})
export class LikelistComponent implements OnInit {
  // @Input() story!: News;
  @Input() story!: News;
  userID = '6205f461d5cf1c22aad415a6';
  @Output() likelistEmiter = new EventEmitter<string>();
  // likedStories!: News[];

  constructor() {}

  ngOnInit(): void { }

  removeStory(id: string) {
    // this.story.likedIdList = this.story.likedIdList.filter((list) => list._id !== this.userID)

    // console.log("list:", this.story);
    this.likelistEmiter.emit(id);
  }
}
