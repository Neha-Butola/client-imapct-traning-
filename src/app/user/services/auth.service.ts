import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'api/users/';
  constructor(private httpClient: HttpClient) {}
  createUser(user: Register): Observable<any> {
    console.log(new Date());
    return this.httpClient.post(this.api + 'register', user);
  }
  loginUser(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.api + 'login', { email, password });
  }
}
