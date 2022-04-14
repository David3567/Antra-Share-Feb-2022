import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { VariableValue } from './variable.service';


const httpOptions = {
  observe: 'response' as 'body', // check the whole response
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  private DPost = 'news/deletePost';
  private DComment = 'news/deleteComment';

  constructor(private http: HttpClient, private variableValue: VariableValue) {}

  deletePost(id: string | undefined) {
    const del = this.http.delete(
      [this.variableValue.baseUrl, this.DPost, id].join('/'),httpOptions
    );
    console.log([this.variableValue.baseUrl, this.DPost, id].join('/'));
    console.log(del);
    return del;
    // return this.http.delete(
    //   [this.variableValue.baseUrl, this.DPost, id].join('/')
  }
  deleteComment(postId: string | undefined, commentId: string | undefined) {
    return this.http.delete(
      [this.variableValue.baseUrl, this.DComment, postId, commentId].join('/')
    );
  }
}