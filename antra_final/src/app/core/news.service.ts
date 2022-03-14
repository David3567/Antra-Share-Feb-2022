import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsurl = 'http://localhost:4231/api';
  newsPath = 'news';
  
  newslist = [];
  newsLikedList: any[]  = [];
  
  subjectLikedList$ = new BehaviorSubject(this.newsLikedList);

  constructor(private http: HttpClient) { }

  getAllNews: () => Observable<any> = () =>
    this.http.get([this.newsurl, this.newsPath].join('/')) as Observable<any[]>;

  addToLikedList(data: any) {
    const findNewsList = this.newsLikedList.find(
      (ele) => ele._id === data._id
    );
    if (!findNewsList) {
      this.newsLikedList = [...this.newsLikedList, data];
    };
    this.subjectLikedList$.next(this.newsLikedList);

    console.log(this.subjectLikedList$);
  }

  RemoveFromLikedList(data: any) {
    const deletedNewsList = this.newsLikedList.filter(
      (ele: any) => ele._id !== data._id
    );
    this.newsLikedList = deletedNewsList;
    this.subjectLikedList$.next(this.newsLikedList);
  }

  getLikedList(): Observable<any> {
    return this.subjectLikedList$.asObservable();
  }

}
