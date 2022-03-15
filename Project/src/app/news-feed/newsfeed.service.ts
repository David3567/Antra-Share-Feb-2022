import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from './interfaces';
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

@Injectable()
export class NewsfeedService {
  private baseUrl = "http://localhost:4231/api/news";
  private readonly header = {
    headers: { "content-type": "application/json" },
  };

  constructor(private http: HttpClient) { }
  likedList = [];
  storyList = [];
  subjectLikedList$ = new BehaviorSubject(this.likedList);
  subjectStories$ = new BehaviorSubject(this.storyList);

  getStoryById(id:string){
    if (id=== "") {
      return;
    }
    this.http
      .get([this.baseUrl, id].join(""), this.header)
      .pipe(
        map((data: any) => data.items)
        //this.storyList = data;

      )
      .subscribe((data) => {

      });
  }
  getStoris() {
    return this.http.get(this.baseUrl) as Observable<
    Story[]
    >;
  }

  getLikedList() {
    return this.subjectLikedList$.asObservable();
  }
  pushToLikedList(story:Story){

  }

  removeFromLikedList(story:Story){

  }
}

