import { Injectable, NgModule } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('auth inter provider');
    console.log(req.url);

    //get token from localStorage;
    const token = localStorage.getItem("bearerToken");
    const authReq = req.clone({
      headers: req.headers.set("Authorization", "Bearer" + token),
    })

    return next.handle(authReq);
  }
}