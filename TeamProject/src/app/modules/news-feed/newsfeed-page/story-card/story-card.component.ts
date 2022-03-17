import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() likedStories: newsTemplate[] = [];
  @Input() story: newsTemplate;
  @Output() likedStoryEmitter = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  like(id: string) {
    this.likedStoryEmitter.emit(id);
  }

  toggleLike(id: string): boolean {
    return this.likedStories.find((story)=> story._id === id) ? true : false;
  }

}
