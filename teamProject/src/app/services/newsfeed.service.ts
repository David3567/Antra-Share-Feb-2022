import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { News } from '../interfaces/news.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  likedNews:News[] = [];
  subjectLikedNews$ = new BehaviorSubject(this.likedNews);

  baseUrl:string = "http://localhost:4231"
  
  constructor(private httpclient:HttpClient) {

  }

  getNewsFromDataBase(){
    let data = this.httpclient.get<News[]>("http://localhost:4231/api/news")
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

  post(contentText: string = "default"): Observable<any> {
    const username = localStorage.getItem('username');
    if(username!=null){
      return this.httpclient.post('http://localhost:4231/api/news', {
        publisherName: username,
        content:{
          video:" ",
          image:"http://via.placeholder.com/640x360",
          text:contentText
        }
      }, httpOptions);
    }
    else return of('not success, username lost');
  }

  patchComment(postid:string, contentText: string = "default"): Observable<any> {
    const username = localStorage.getItem('username');
    if(username!=null){
      return this.httpclient.patch('http://localhost:4231/api/news/addComment/' + postid, {
        publisherName: username,
        content:{
          video:" ",
          image:" ",
          text:contentText
        }
      }, httpOptions);
    }
    else return of('not success, username lost');
  }
}
