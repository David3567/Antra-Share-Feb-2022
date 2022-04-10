import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        // get token from localStorage;
        const token = localStorage.getItem("bearerToken");

        if (token) {
            const newReq = req.clone({
                // headers: req.headers.set("authorization", "Bearer" + token)
                setHeaders: {Authorization: `Bearer${token}`}
            });
            console.log("newReq: ", newReq);
            return <any>next.handle(newReq).pipe(
                catchError((err) => {
                    console.log("from interceptor: ", err.error);
                    return of(null);
                })
            );
            // return <any>next.handle(newReq);
        } else {
            return <any>next.handle(req).pipe(
                catchError((err) => {
                    console.log("from interceptor: ", err.error);
                    return of(null);
                })
            );
        }
    }
}

// @NgModule({
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: HttpRequestInterceptor,
//       multi: true,
//     },
//   ],
// })
// export class HttpInterceptorModule {}
