import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginComponent } from "../login/login.component";
import { AppauthService } from "./appauth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: LoginComponent, private router: Router) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.isAuthenticated()) {
      //   this.authService.setRedirectUrl(this.router.url);

      this.router.navigate(["/login"], {
        queryParams: { returnUrl: state.url },
      });

      return false;
    }
    return true;
  }
}
