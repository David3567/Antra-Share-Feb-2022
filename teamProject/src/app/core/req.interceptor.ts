import { Injectable, NgModule } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class requestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('auth inter provider');
    console.log(req.url);

    //get token from localStorage;
    const token = "bearerToken";
    const authReq = req.clone({
      setHeaders: {Authorization: token}
    })

    return next.handle(authReq);
  }
}