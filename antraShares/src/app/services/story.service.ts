import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Story } from '../interfaces/story.model';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private baseUrl = 'http://localhost:4231/api';
  private path = 'news';
  likeListByUser: Story[] = [];
  subjectLikeList$ = new BehaviorSubject(this.likeListByUser);
  constructor(private http: HttpClient) {}
  getStories() {
    return this.http.get(
      [this.baseUrl, this.path].join('/')
    ) as Observable<Story>;
  }
  pushIntoLikeList(likeStory: Story) {
    const findFeedsInLikeList = this.likeListByUser.find(
      (story) => story._id === likeStory._id
    );
    if (!findFeedsInLikeList) {
      this.likeListByUser = [likeStory, ...this.likeListByUser];
    } else {
      this.likeListByUser = this.likeListByUser.filter(
        (story) => story._id !== likeStory._id
      );
    }

    this.subjectLikeList$.next(this.likeListByUser);
  }

  removeNewsFromLikeList(likeStory: Story) {
    const deleteLike = this.likeListByUser.filter(
      (story) => story._id !== likeStory._id
    );
    this.likeListByUser = deleteLike;
    this.subjectLikeList$.next(this.likeListByUser);
  }
}
