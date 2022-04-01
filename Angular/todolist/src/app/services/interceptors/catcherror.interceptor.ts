import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CatcherrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((res) => {
        console.log('this is tap');
        if (res instanceof HttpResponse) {
          console.log('2nd: ', res);
        }
      }),
      catchError((err) => {
        console.log('this is catchError');
        return throwError(err);
      })
    );
  }
}
