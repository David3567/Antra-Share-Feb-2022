import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TodoInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    console.log('1st: before next');

    return next.handle(request).pipe(
      tap((res) => {
        console.log('1st: ', res);
        const elapsed = Date.now() - started;
        console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
        if (res instanceof HttpResponse) {
          console.log(`Response Received`);
        }
      })
    );
  }
}
