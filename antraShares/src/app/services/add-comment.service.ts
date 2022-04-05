import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comments, Story } from '../interfaces/story.model';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root',
})
export class AddCommentService {
  private path = 'news';
  private add = 'addComment';
  addNewComment$ = new Subject<Comments>();
  constructor(private http: HttpClient, private variableValue: VariableValue) {}
  addComment(id: string, comment: Comments) {
    // this.addNewComment$.next(comment);
    return this.http.patch(
      [this.variableValue.baseUrl, this.path, this.add, id].join('/'),
      comment
    ) as Observable<any>;
   
  }
  // addComment(id: string, comment: Comments) {
  //   const newP = this.http.patch(
  //     [this.variableValue.baseUrl, this.path, this.add, id].join('/'),
  //     comment
  //   ) as Observable<Comments>;
  //   return newP.subscribe()
   
  // }
}
