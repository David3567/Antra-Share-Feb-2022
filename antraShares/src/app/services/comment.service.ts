import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/story.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private news = 'news';
  private addComment = 'addComment';

  constructor(private http: HttpClient, private variableValue: VariableValue) {}

  addNewComment(newComment: Comment) {
    return this.http.patch(
      [this.variableValue.baseUrl, this.news, this.addComment, newComment._id].join(
        '/'
      ), newComment
    ) as Observable<Comment>;
  }
}
