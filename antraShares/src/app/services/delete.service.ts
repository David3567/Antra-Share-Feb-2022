import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  private DPost = 'news/deletePost';
  private DComment = 'news/deleteComment';

  constructor(private http: HttpClient, private variableValue: VariableValue) {}

  deletePost(id: string | undefined) {
    return this.http.delete(
      [this.variableValue.baseUrl, this.DPost, id].join('/')
    );
  }
  deleteComment(postId: string | undefined, commentId: string | undefined) {
    return this.http.delete(
      [this.variableValue.baseUrl, this.DComment, postId, commentId].join('/')
    );
  }
}
