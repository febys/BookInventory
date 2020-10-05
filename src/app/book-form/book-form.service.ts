import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BookFormService {
  constructor(private http: HttpClient) {}
  // create(book) {
  //   this.http.post<any>('http://localhost:3000/book/new?paramBean={"fillFieldLabels": true}',)
  // }
}
