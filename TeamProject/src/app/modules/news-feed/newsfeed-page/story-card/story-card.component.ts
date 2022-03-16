import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() story: any;
  @Output() likedStoryEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    this.likedStoryEmitter.emit(this.story._id);
  }

}
