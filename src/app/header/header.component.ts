import { Component, OnInit } from "@angular/core";
import { AuthService } from "angularx-social-login";
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login/login.service';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

  constructor(
    private login : LoginService
  ) {;
   }


  ngOnInit() {
  }


  isAuth():boolean{
    return this.login.isAuthenticated();
  }

  logout() {
  return  this.login.logout();

  }
}
