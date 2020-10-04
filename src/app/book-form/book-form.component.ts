import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"],
})
export class BookFormComponent {
  bookTitle: "";
  bookAuthor: "";
  bookPrice: "";
  bookDescription: "";
  bookImageUrl: "";
  pCategory: "";
  bookForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      price: ["", Validators.required],
      image: ["", Validators.required],
      category: ["", Validators.required],
    });
  }
  onSave() {}
  onDelete() {}
}
