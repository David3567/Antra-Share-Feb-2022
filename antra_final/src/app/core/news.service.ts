import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { News } from '../interface/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsurl = 'http://localhost:4231/api';
  newsPath = 'news';
  
  newslist = [];
  newsLikedList: News[]  = [];
  
  subjectLikedList$ = new BehaviorSubject(this.newsLikedList);

  constructor(private http: HttpClient) { }

  getAllNews: () => Observable<News[]> = () =>
    this.http.get<News[]>([this.newsurl, this.newsPath].join('/'));

  addToLikedList(data: News) {
    const findNewsList = this.newsLikedList.find(
      (ele) => ele._id === data._id
    );
    if (!findNewsList) {
      this.newsLikedList = [...this.newsLikedList, data];
    };
    this.subjectLikedList$.next(this.newsLikedList);

    // console.log(this.subjectLikedList$);
  }

  RemoveFromLikedList(data: News) {
    const deletedNewsList = this.newsLikedList.filter(
      (ele: News) => ele._id !== data._id
    );
    this.newsLikedList = deletedNewsList;
    this.subjectLikedList$.next(this.newsLikedList);
  }

  getLikedList(): Observable<News[]> {
    return this.subjectLikedList$.asObservable();
  }

}
