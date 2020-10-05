import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Book } from "../modules/book";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"],
})
export class BookFormComponent {
  public newbook: Book = {} as Book;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}
  onSave(form: NgForm) {
    this.bookService
      .createData(this.newbook)
      .subscribe((response) => console.log(response));
  }
  onDelete() {}
}
