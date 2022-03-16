import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css']
})
export class LikeListComponent implements OnInit {
  @Input() likedStories: any[];
  @Output() likedStoriesEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveStory(e:string) {
    this.likedStories = this.likedStories.filter((story)=> story._id !== e);
    this.likedStoriesEmitter.emit(this.likedStories);
  }
}
