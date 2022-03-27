import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/story.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private news = 'news';
  private addComment = 'addComment';
  private baseUrl = 'http://localhost:4231/api'
  constructor(private http: HttpClient) { }

  addNewComment(newComment: any) {
    console.log(newComment)
    console.log([this.baseUrl, this.news, this.addComment, newComment._id].join('/'))
    return this.http.patch(
      [this.baseUrl, this.news, this.addComment, newComment._id].join('/'),
      newComment
    ) as Observable<Comment>;
  }
}
