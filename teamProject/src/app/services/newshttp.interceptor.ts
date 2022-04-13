import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenService } from './authen.service';

@Injectable()
export class NewsHttpInterceptor implements HttpInterceptor {

  constructor(private auth:AuthenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request.clone({
      setHeaders:{
        authorization:"Bearer"+this.auth.getJWT()
      }
      
    })
    console.log(request.headers)
    return next.handle(req);
  }
}
