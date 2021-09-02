import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(new Date());
    return next.handle(request).pipe(
      tap(
        (result: HttpEvent<any>) => {
          console.log(new Date());
          console.log(JSON.stringify(result));
        },
        (error: HttpErrorResponse) => {
          console.log(new Date());
          console.log(JSON.stringify(error));
        }
      )
    );
  }
}
