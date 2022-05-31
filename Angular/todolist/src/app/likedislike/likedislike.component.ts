import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likedislike',
  templateUrl: './likedislike.component.html',
  styleUrls: ['./likedislike.component.scss'],
})
export class LikedislikeComponent implements OnInit {
  likedCounter = 100;
  dislikedCounter = 25;
  status = Status.UNSELECTED;

  constructor() {}

  ngOnInit(): void {}

  like() {
    if (this.status === Status.UNSELECTED) {
      this.likedCounter++ && (this.status = Status.LIKEED);
    } else if (this.status === Status.LIKEED) {
      this.likedCounter-- && (this.status = Status.UNSELECTED);
    } else if (this.status === Status.DISLIKEED) {
      this.dislikedCounter-- &&
        this.likedCounter++ &&
        (this.status = Status.LIKEED);
    }
  }

  dislike() {
    if (this.status === Status.UNSELECTED) {
      this.dislikedCounter++ && (this.status = Status.DISLIKEED);
    } else if (this.status === Status.LIKEED) {
      this.likedCounter-- &&
        this.dislikedCounter++ &&
        (this.status = Status.DISLIKEED);
    } else if (this.status === Status.DISLIKEED) {
      this.dislikedCounter-- && (this.status = Status.UNSELECTED);
    }
  }
}

enum Status {
  LIKEED = 'liked',
  DISLIKEED = 'disliked',
  UNSELECTED = 'unselected',
}
