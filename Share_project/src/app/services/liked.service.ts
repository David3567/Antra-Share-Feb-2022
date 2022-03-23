import { Injectable, Output, EventEmitter } from '@angular/core';
import { News } from '../news-feed/models/news.model';

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  likedList = new Array<News>();

  @Output() likeClickedEvent = new EventEmitter<News>();

  constructor() { }

  // getLikedEvent(): void {
  //   this.likeClickedEvent.emit(this.likedList);
  // }

  addLiked(story:News) {
    this.likedList.push(story);
  }
}
