import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseurl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  // getBook(bookname: string) {
  //   return this.http.get([this.baseurl, bookname].join(''));
  // }

  getBook(bookname: string) {
    // if (bookname === '') {
    //   return;
    // }
    return this.http.get([this.baseurl, bookname].join(''));
    // .pipe(
    //   catchError((err) => {
    //     return of(676);
    //   })
    // );
  }

  // handleError
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
