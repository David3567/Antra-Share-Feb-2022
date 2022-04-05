import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../news-feed/story.interfaces';
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class NewsfeedService {

  httpOptions = {
    observe: "response" as "body", // check the whole response
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  }; 

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
  
  addNewComment(id: string, data: any){
    return this.http.patch(
      [this.baseUrl, this.addComment, id].join('/'), data, this.httpOptions
    ) as Observable<Story>
  }

  addNewStory(data: any){
    return this.http.post(
      [this.baseUrl, ].join('/'), data, this.httpOptions
    )
  }
}

