import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { News } from '../interfaces/news.model';
import { AuthenService } from './authen.service';
import { Comment } from '../interfaces/comment.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  likedNews:News[] = [];
  pagedNews:News[] = [];
  subjectLikedNews$ = new BehaviorSubject(this.likedNews);
  subjectPagedNews$ = new BehaviorSubject(this.pagedNews);

  baseUrl:string = "http://localhost:4231"
  
  constructor(private httpclient:HttpClient) {
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

  loadNumberNewsPerPage(pageIndex:number, numberNewsPerPage:number):void{
    this.httpclient.get<News[]>([this.baseUrl,"api","news",pageIndex,numberNewsPerPage].join("/")).subscribe(
      data=>{
        this.pagedNews = this.pagedNews.concat(data)
        this.sortNewsArrayWithTime();
        this.subjectPagedNews$.next(this.pagedNews)
      }
    )
  }

  getNewsArray():Observable<News[]>{
    return this.subjectPagedNews$.asObservable();
  }

  sortNewsArrayWithTime():void{
    this.pagedNews.sort((a:News,b:News)=>{
      //early post on top
      //return -(a.publishedTime.localeCompare(b.publishedTime));
      //new post on top
      return (a.publishedTime.localeCompare(b.publishedTime));
    });
  }


  post(contentText:string,imageURL:string =' ', videoURL:string=' '): Observable<any> {
    return this.httpclient.post([this.baseUrl+'/api/news'].join(), {
      content:{
        video:videoURL,
        image:imageURL,
        text:contentText
      }
    }, httpOptions);
    
  }

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
