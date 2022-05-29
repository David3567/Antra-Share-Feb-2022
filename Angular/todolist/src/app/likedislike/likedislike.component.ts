import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likedislike',
  templateUrl: './likedislike.component.html',
  styleUrls: ['./likedislike.component.scss'],
})
export class LikedislikeComponent implements OnInit {
  hasChosen: boolean = false;
  hasLiked: boolean = false;

  likedCounter = 100;
  dislikedCounter = 25;

  constructor() {}

  ngOnInit(): void {}

  like() {
    if (!this.hasChosen) {
      this.hasChosen = true;
      this.hasLiked = true;
      this.likedCounter++;
    } else {
      if (!this.hasLiked) {
        this.hasLiked = true;
        this.likedCounter++;
        this.dislikedCounter--;
      } else {
        this.hasChosen = false;
        this.hasLiked = false;
        this.likedCounter--;
      }
    }
  }

  dislike() {
    if (!this.hasChosen) {
      this.hasChosen = true;
      this.hasLiked = false;
      this.dislikedCounter++;
    } else {
      if (this.hasLiked) {
        this.hasLiked = false;
        this.likedCounter--;
        this.dislikedCounter++;
      } else {
        this.hasChosen = false;
        this.hasLiked = false;
        this.dislikedCounter--;
      }
    }
  }
}

enum Status {}
