import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liked-story',
  templateUrl: './liked-story.component.html',
  styleUrls: ['./liked-story.component.css']
})
export class LikedStoryComponent implements OnInit {
  @Input() likedStory: any;
  @Output() removeStoryEmitter: any = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeStory(id: string) {
    this.removeStoryEmitter.emit(id);
  }
}
