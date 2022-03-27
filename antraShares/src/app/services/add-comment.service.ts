import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../interfaces/story.model';

@Injectable({
  providedIn: 'root',
})
export class AddCommentService {
  private baseUrl = 'http://localhost:4231/api';
  private path = 'news';
  private add = 'addComment';
  constructor(private http: HttpClient) {}
  addComment(id: string, comment: Comments) {
    return this.http.patch(
      [this.baseUrl, this.path,this.add, id].join('/'),
      comment
    ) as Observable<Comments>;
  }
}
