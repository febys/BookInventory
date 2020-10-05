import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { param } from "jquery";
import { Observable } from "rxjs";
import { Book } from "../book";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private readonly _url: string;

  Data: any;
  books: any;

  constructor(private _httpClient: HttpClient, private route: ActivatedRoute) {
    this._url = "api/book";
  }

  getMetaData(): Observable<any> {
    return this._httpClient.options(this._url);
  }

  getDataList(params?: any): Observable<any> {
    const reqOptions = {
      params: new HttpParams().set("paramBean", JSON.stringify(params || {})),
    };

    return this._httpClient.get(this._url, reqOptions);
  }

  getData(id: number, params?: any): Observable<any> {
    const reqOptions = {
      params: new HttpParams().set("paramBean", JSON.stringify(params || {})),
    };

    return this._httpClient.get(`${this._url}/${id}`, reqOptions);
  }

  createData(book: Book): Observable<any> {
    return this._httpClient.post(`${this._url}/new`, book);
  }
}
