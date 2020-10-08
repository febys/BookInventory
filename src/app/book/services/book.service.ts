import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Book } from "../modules/book";
import { BookEntity } from "../modules/booksTdo";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private readonly url: string;
  //  = ApiConfigb.url + "/book";

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

  getData(id: number, params?: any): Observable<BookEntity> {
    const reqOptions = {
      params: new HttpParams().set("paramBean", JSON.stringify(params || {})),
    };

    return this._httpClient.get<BookEntity>(`${this.url}/${id}`, reqOptions);
  }

  createData(book: Book): Observable<BookEntity> {
    return this._httpClient.post<BookEntity>(`${this.url}/new`, book);
  }
  update(id: number, book: Book): Observable<BookEntity> {
    return this._httpClient.put<BookEntity>(`${this.url}/${id}`, book);
  }

  deleteData(id: number): Observable<any> {
    return this._httpClient.delete(`${this.url}/${id}`);
  }
}
