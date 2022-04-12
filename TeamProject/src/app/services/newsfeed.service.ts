import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newsTemplate } from '../interfaces/news.model';

const httpOptions = {
  observe: "response" as "body", // check the whole response
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {
  base_Url = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<any>(this.base_Url);
  }

  postNews(newStory: newsTemplate) {
    return this.http.post<newsTemplate>(this.base_Url, newStory, httpOptions);
  }

  deletePost(id: string) {
    return this.http.delete([this.base_Url, 'deletePost', id].join('/'), httpOptions);
  }

  addNewComment(id: string, newComment: any) {
    return this.http.patch<newsTemplate>([this.base_Url, 'addComment', id].join('/'), newComment, httpOptions);
  }

  deleteComment(postID: string, commentID: string) {
    return this.http.delete([this.base_Url, 'deleteComment', postID, commentID].join('/'), httpOptions);
  }

}
