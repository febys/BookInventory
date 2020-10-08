import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Book } from "../modules/book";
import { BookService } from "../services/book.service";

@Injectable({
  providedIn: "root",
})
export class BookFormService {
  constructor(private bookService: BookService) {}
  createBook(book: Book): Observable<any> {
    return this.bookService.createData(book);
  }
}
