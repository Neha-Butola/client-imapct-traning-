import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { NEVER, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { empty } from 'rxjs/internal/Observer';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if you don't havea valid token
    // we need to provide a bypass to login and register

    // array `
    const skipRoute: string[] = ['login', 'register'];

    console.log(request.url);
    console.log();
    if (skipRoute.find((s) => request.url.includes(s))) {
      console.log('inside the login wala if');
      return next.handle(request);
    }
    console.log('inside the intercept token');
    if (localStorage.getItem('token')) {
      console.log('we have a token');

      const data = JSON.parse(localStorage.getItem('userDetails') || '{}');
      console.log(data.exp);
      console.log(Date.now());
      if (new Date().getTime() / 1000 < data.exp) {
        console.log('token is valid');
        request = request.clone({
          headers: request.headers.set(
            'authorization',
            localStorage.getItem('token') || '{}'
          ),
        });

        return next.handle(request);
      } else {
        localStorage.clear();
        this.router.navigate(['/user/login']);
        console.log('inside the else part');
        return NEVER;
      }
    } else {
      this.router.navigate(['/user/login']);
    }
    //return Observable.create(empty);
    return NEVER;
  }
}
function token(token: any) {
  throw new Error('Function not implemented.');
}
