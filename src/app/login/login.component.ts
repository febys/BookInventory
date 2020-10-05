import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { users } from '../auth/user';
import {AuthService, GoogleLoginProvider} from 'angular-6-social-login';
import {AppauthService} from '../auth/appauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  response;
  users = new users();
  loginForm: FormGroup;
  returnUrl: string;
  error: string;
   singingIn = false ;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private  socialAuthService: AuthService,
    private authService: AppauthService,
    // private lastUrlService: LastUrlService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

   // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
  }

  signInGoogle() {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then( (userData: users) => [
        this.singingIn = true,
      this.authService.gaLogin(userData.idToken)
        .subscribe(
          res => {
            if (res) {
              // localStorage.setItem('auth-token',res.authToken)

            }
          }
        )

      ]);
  }
  get f() {
    return this.loginForm.controls;
  }

  // onSubmit() {
  //   this.submitted = true;
  //
  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //
  //   // this.authService
  //   //   .login(this.f.username.value, this.f.password.value)
  //   //   .pipe(first())
  //   //   .subscribe(
  //   //     (data) => {
  //   //       this.error = "";
  //   //       this.router.navigate([this.returnUrl]);
  //   //     },
  //   //     (error) => {
  //   //       this.error = error;
  //   //     }
  //   //   );

}
