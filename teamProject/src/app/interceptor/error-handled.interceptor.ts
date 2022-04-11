import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class ErrorHandledInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      //retry(3)
      map(res => {
        console.log("Passed through the interceptor in response");
        return res
    }),
      catchError((err: HttpErrorResponse) =>{
        let errorMsg = " ";
        if(err.error instanceof ErrorEvent){
          console.log('this is client side error');
          errorMsg = `error: ${err.error.message}`;
        }
        else{
          console.log('This is server side error');
          errorMsg = `Error Code: ${err.status},  Message: ${err.message}`
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
    );
  }
}
