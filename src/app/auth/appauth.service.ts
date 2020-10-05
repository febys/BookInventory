import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AppauthService {
  // tslint:disable-next-line:variable-name
  private readonly _url: string;
  idToken?: string;
  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) {
    this._url = 'api/auth';
  }
  public gaLogin(idToken: string) {
  return  this._httpClient.post(`${this._url}/this.gaLogin`, {googleTokenId: idToken} )
    .pipe(this.fillUserONStatusOk.bind(this));
  }
  fillUserONStatusOk(res: Observable<any>){
    return res.pipe(
      // map(res:Api)
    );
  }
}
