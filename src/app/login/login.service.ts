import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  GoogleLoginProvider,
  SocialUser,
} from "angularx-social-login";

import { AuthService } from "angularx-social-login";
import { AppauthService } from "../auth/appauth.service";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  singingIn = false;
  username :string;
  errorMessage = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private appauthService: AppauthService
  ) { }

  signin() {

    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData: SocialUser) => {

        this.appauthService.gaLogin(userData.idToken).subscribe((res: any) => {
          console.log(res);
          if (res) {
            localStorage.setItem("authToken", res.authToken);
            this.router.navigate(['/']);
            this.username = res.firstName;
            this.singingIn = true;

          }
        },
          error => {
            this.errorMessage = "This is not an existing account." +
              "Tap Register";

          });

      });
  }
  public userName (){
    return this.username;
  }
  public logout(){
    localStorage.removeItem("authToken");
    this.singingIn = false;
    this.router.navigate(['/login']);
  }
  public isAuthenticated(): boolean {
    return this.singingIn;
  }
}
