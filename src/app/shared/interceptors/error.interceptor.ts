import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // status code
    // status message
    // error details
    return next.handle(request).pipe(
      catchError((err) => {
        console.log(JSON.stringify(err));
        return throwError({
          status: err.status,
          statusText: err.statusText,
          error: err.error,
        });
      })
    );
  }
}
