import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errors: any = {};
  decoded: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  loginSubmit() {
    this.authService.loginUser(this.email, this.password).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        localStorage.setItem('token', res.token);
        this.decoded = jwt_decode(res.token);
        console.log(this.decoded);
        localStorage.setItem('userDetails', JSON.stringify(this.decoded));
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log(JSON.stringify(err.error));
        this.errors = err.error;
      }
    );
  }
}
