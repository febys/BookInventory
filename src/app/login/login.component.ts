import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Users } from "../auth/user";
import {
  GoogleLoginProvider,
  SocialUser,
} from "angularx-social-login";

import { AuthService } from "angularx-social-login";
import { AppauthService } from "../auth/appauth.service";
import { AuthInterceptor } from "../interceptors/auth.interceptor";
import {LoginService} from './login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  user:SocialUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private login :LoginService
  ) {}

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    // })
  }
  signInGoogle(){
     this.login.signin();
  }


}
