import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private baseUrl = "http://localhost:4231/api/news";
  private deletePostUrl = 'deletePost';
  private deleteCommentUrl = 'deleteComment';

  constructor(private http: HttpClient) { }

  deletePost(id: string) {
    return this.http.delete(
      [this.baseUrl, this.deletePostUrl, id].join('/')
    )
  }

  deleteComment(post_id: string, comment_id: string) {
    return this.http.delete(
      [this.baseUrl, this.deleteCommentUrl, post_id, comment_id].join('/')
    )
  }
}
