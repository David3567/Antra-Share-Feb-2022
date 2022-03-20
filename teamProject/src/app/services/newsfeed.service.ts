import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { News } from '../interfaces/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  likedNews:News[] = [];
  subjectLikedNews$ = new BehaviorSubject(this.likedNews);

  baseUrl:string = "http://localhost:4231"
  url2 = [this.baseUrl,"api","news"].join("/")
  constructor(private httpclient:HttpClient) {

  }

  getNewsFromDataBase(){
    let data = this.httpclient.get("http://localhost:4231/api/news")
    //data.subscribe(data=>{console.log(data);
    data.subscribe(data=>{})
    return data;
  }
  
  getLikedList(){
    return this.subjectLikedNews$.asObservable();
  }

  addToLikeList(news:News){
    this.likedNews.push(news);
    console.log(this.likedNews)
    this.subjectLikedNews$.next(this.likedNews)
  }

  deleteFromLikeList(liked:News){
    this.likedNews = this.likedNews.filter((news)=>{
        return news._id != liked._id;
    })
    console.log(this.likedNews)
    this.subjectLikedNews$.next(this.likedNews)
  }
}
