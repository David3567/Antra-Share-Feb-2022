import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, Story } from '../news-feed/story.interfaces';
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

@Injectable()
export class NewsfeedService {
  private baseUrl = "http://localhost:4231/api/news";


  likedList: Story[] = [];
  storyList = [];
  private addComment = "addComment";
  subjectLikedList$ = new BehaviorSubject(this.likedList);

  constructor(private http: HttpClient) { }


  getStoris(): Observable<Story[]> {
    return this.http.get<Story[]>(this.baseUrl);
  }

  getLikedList() {
    return this.subjectLikedList$.asObservable();
  }

  pushToLikedList(data: Story){
    const findStoryList = this.likedList.find(
      (ele) => ele._id === data._id
    );
    if (!findStoryList) {
      this.likedList = [...this.likedList, data];
    };
    this.subjectLikedList$.next(this.likedList);
  }

  removeFromLikedList(data: Story){
    const deletedStoryList = this.likedList.filter(
      (ele: Story) => ele._id !== data._id
    );
    this.likedList = deletedStoryList;
    this.subjectLikedList$.next(this.likedList);
  }

  addNewComment(data:any){
    return this.http.post(
      [this.baseUrl, this.addComment, data._id].join('/'), data
    );
  }
}

