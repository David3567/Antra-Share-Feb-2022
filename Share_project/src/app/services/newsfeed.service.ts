import { Injectable } from '@angular/core';
import { News } from '../news-feed/models/news.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import decode from 'jwt-decode';
import { tokenInfo } from '../login/models/tokenInfo';


@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private baseUrl = "http://localhost:4231/api"
  private news_path = "news"
  private comment = 'addComment'
  private delete = 'deleteComment'
  private delete_path = "deletePost"

  private likedList:string[] = [];

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getStories() {
    return this.http.get<News>([this.baseUrl, this.news_path].join("/"));
  }

  postStory(story:string) {
    const options = { 
      headers: {
        "content-type": 'application/json',
      }
  } 
    console.log("post Story service")
    return this.http.post([this.baseUrl, this.news_path].join("/"), story, options).pipe(
      catchError(this.handleError)
    );
  }

  addComment(id: any, commentData: any) {
    const options = { 
      observe: "response" as "body",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
  } 
    console.log('id: ', id);
    return this.http.patch(
      [this.baseUrl, this.news_path, this.comment, id].join('/'), 
      commentData, 
      options
    )
  }

  deleteOneComment(postId: any, commentId: any) {
    return this.http.delete(
      [this.baseUrl, this.news_path, this.delete, postId, commentId].join('/')
    )
  }
  
  deleteStory(storyid: string) {

    return this.http.delete([this.baseUrl, this.news_path, this.delete_path, storyid].join(''))
  }

  likeStory(storyid: string) {
    this.likedList.push(storyid);
  }

  disLikeStory(storyid: string) {
    this.likedList = this.likedList.filter((val) => val !== storyid);
  }
  
  getLikelist() {
    return this.likedList;
  }

}