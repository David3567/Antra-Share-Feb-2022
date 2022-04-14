import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comments } from 'src/app/services/interface/news.model';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root',
})
export class AddCommentService {
  private path = 'news';
  private add = 'addComment';
  addNewComment$ = new Subject<Comments>();
  constructor(private http: HttpClient, private variableValue :VariableValue) {}
  addComment(id: string, comment: Comments) {
    return this.http.patch(
      [this.variableValue.baseUrl, this.path,this.add, id].join('/'),
      comment
    ) as Observable<any>;
  }
}