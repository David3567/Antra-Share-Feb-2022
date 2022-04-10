import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(request).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(1)
        }
      }, 
      error: error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 400){
              this.router.navigate(['/']);
          }
        }
      },
      complete: () => console.log('on complete')
      
    })
    ); 
      
  }
}
