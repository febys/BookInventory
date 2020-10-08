import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { Users } from "../auth/user";
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser,
} from "angular-6-social-login";
import { AppauthService } from "../auth/appauth.service";
import { AuthInterceptor } from "../interceptors/auth.interceptor";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  response;
  users = new Users();
  loginForm: FormGroup;
  returnUrl: string;
  error: string;
  singingIn = false;

  constructor(
    // private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private socialAuthService: AuthService,
    private authService: AppauthService
  ) {}

  ngOnInit() {}

  signInGoogle() {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData: SocialUser) => {
        console.log(userData);

        this.singingIn = true;

        this.authService.gaLogin(userData.idToken).subscribe((res: any) => {
          if (res) {
            localStorage.setItem("authToken", res.data.authToken);
          }
        });
      })
      .catch((err) => console.log(err));
  }
}
