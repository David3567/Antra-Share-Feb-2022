import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() likedStories: any[] = [];
  @Input() story: any;
  @Output() likedStoryEmitter = new EventEmitter();
  isLiked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  like(id: string) {
    this.isLiked = !this.isLiked;
    this.likedStoryEmitter.emit(id);
  }

  toggleLike(id: string): boolean {
    return this.likedStories.find((story)=> story._id === id) ? true : false;
  }

}
