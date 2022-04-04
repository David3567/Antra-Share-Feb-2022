import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Comments, Story } from '../interfaces/story.model';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private path = 'news';
  likeListByUser: Story[] = [];
  subjectLikeList$ = new BehaviorSubject(this.likeListByUser);

  newComment$ = new Subject<Comments>();
  
  constructor(private http: HttpClient, private variableValue: VariableValue) {}
  getStories() {
    return this.http.get(
      [this.variableValue.baseUrl, this.path].join('/')
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
