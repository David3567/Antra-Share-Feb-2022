import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private route: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('bearerToken');
    const reqWithAuth = request.clone({
      setHeaders: {
        Authorization: token ? `Bearer${token}` : ''
      }
    })

    return next.handle(reqWithAuth).pipe(
      // retry(1),
      catchError((err: HttpErrorResponse) => {
        alert(err.error);
        this.route.navigateByUrl('/');
        return of(null);
        // return throwError(err);
      }
      )
    )
  }
}
