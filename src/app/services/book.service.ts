import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { param } from "jquery";
import { Observable } from "rxjs";
import { Book } from "../modules/book";
import { BookTdo } from "../modules/booksTdo";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private readonly url: string;

  constructor(private _httpClient: HttpClient, private route: ActivatedRoute) {
    this.url = "api/book";
  }

  getMetaData(): Observable<any> {
    return this._httpClient.options(this.url);
  }

  getDataList(params?: any): Observable<any> {
    const reqOptions = {
      params: new HttpParams().set("paramBean", JSON.stringify(params || {})),
    };

    return this._httpClient.get(this.url, reqOptions);
  }

  getData(id: number, params?: any): Observable<any> {
    const reqOptions = {
      params: new HttpParams().set("paramBean", JSON.stringify(params || {})),
    };

    return this._httpClient.get(`${this.url}/${id}`, reqOptions);
  }

  createData(book: Book): Observable<any> {
    // const reqOptions = {
    //   params: new HttpParams().set("paramBean", JSON.stringify(param || {})),
    // };
    return this._httpClient.post(`${this.url}/new`, book);
  }
}
