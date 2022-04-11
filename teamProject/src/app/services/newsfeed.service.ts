import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { News } from '../interfaces/news.model';
import { AuthenService } from './authen.service';


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
  
  constructor(private httpclient:HttpClient, private auth:AuthenService) {
  }

  getNewsFromDataBase(){
    return this.httpclient.get<News[]>([this.baseUrl+'/api/news'].join())
  }
  
  getLikedList(){
    return this.subjectLikedNews$.asObservable();
  }

  addToLikeList(news:News){
    this.likedNews.push(news);
    this.subjectLikedNews$.next(this.likedNews)
  }

  deleteFromLikeList(liked:News){
    this.likedNews = this.likedNews.filter((news)=>{
        return news._id != liked._id;
    })
    this.subjectLikedNews$.next(this.likedNews)
  }


  post(contentText: string = "default"): Observable<any> {
    return this.httpclient.post([this.baseUrl+'/api/news'].join(), {
      //publisherName:this.auth.getUserName(),
      content:{
        video:" ",
        image:"http://via.placeholder.com/640x360",
        text:contentText
      }
    }, httpOptions);
    
  }


  // post(contentText: string = "default"): Observable<any> {
  //   const username = localStorage.getItem('username');
  //   if(username!=null){
  //     return this.httpclient.post('http://localhost:4231/api/news', {
  //       publisherName: username,
  //       content:{
  //         video:" ",
  //         image:"http://via.placeholder.com/640x360",
  //         text:contentText
  //       }
  //     }, httpOptions);
  //   }
  //   else return of('not success, username lost');
  // }

  patchComment(postid:string, contentText: string = "default"): Observable<any> {
      return this.httpclient.patch('http://localhost:4231/api/news/addComment/' + postid, {
        content:{
          video:" ",
          image:" ",
          text:contentText
        }
      }, httpOptions);
  }

  deleteNews(_id:string){
    return this.httpclient.delete('http://localhost:4231/api/news/deletePost/'+_id);
  }

  deleteComment(_id:string,comment_id:string){
    return this.httpclient.delete('http://localhost:4231/api/news/deleteComment/'+_id+'/'+comment_id);
  }
}
