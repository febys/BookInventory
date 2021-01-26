import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TwoStepAuthDto } from "./twoStepAuthDto";
import { Users } from "./user";

@Injectable({
  providedIn: "root",
})
export class AppauthService {
  private readonly _url: string;
  idToken?: string;
  constructor(private _httpClient: HttpClient) {
    this._url = 'api/auth';
  }

  gaLogin(idToken: string) {
    return this._httpClient.post(`${this._url}/gaLogin`, { idToken });
  }

  uuid(username: string): Observable<any> {
    return this._httpClient.post(`${this._url}/uuid`, username);
  }
  password(twoStepAuth: TwoStepAuthDto): Observable<any> {
    return this._httpClient.post(`${this._url}/password`, twoStepAuth);
  }
  register(newUser: Users): Observable<any> {
    return this._httpClient.post(`${this._url}/register`, newUser);
  }
  logout() {}
}
