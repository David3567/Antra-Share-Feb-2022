import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GetNewsService {
  baseURL: string = "http://localhost:4231/api/news";

constructor(private http: HttpClient) {}

getRepos(userName: string): Observable<any> {
  return this.http.get(this.baseURL + 'users/' + userName + '/repos')
}

}
