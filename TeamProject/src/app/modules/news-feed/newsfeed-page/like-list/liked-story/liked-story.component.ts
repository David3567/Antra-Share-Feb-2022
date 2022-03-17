import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';

@Component({
  selector: 'app-liked-story',
  templateUrl: './liked-story.component.html',
  styleUrls: ['./liked-story.component.css']
})
export class LikedStoryComponent implements OnInit {
  @Input() likedStory: newsTemplate;
  @Output() removeStoryEmitter: any = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeStory(id: string) {
    this.removeStoryEmitter.emit(id);
  }
}
