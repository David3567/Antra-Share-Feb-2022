import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../interfaces/story.model';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root',
})
export class PostStoryService {
  private path = 'news';
  constructor(private http: HttpClient, private variableValue: VariableValue) {}
  postNews(data: Story) {
    return this.http.post(
      [this.variableValue.baseUrl, this.path].join('/'),
      data
    ) as Observable<Story>;
  }
}
