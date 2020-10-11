import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { param } from "jquery";
import { Book } from "../modules/book";
import { BookEntity } from "../modules/booksTdo";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"],
})
export class BookFormComponent implements OnInit {
  public newbook: Book;
  bookMetadata: any;
  id: number;
  editMode: boolean;
  data: any;
  bookFG: FormGroup; // bookFG qendron per book Form Group

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookService.getMetaData().subscribe((res) => {
      this.bookMetadata = res.data.fieldMap;
      // console.log(this.bookMetadata);
    });
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;

      console.log(this.editMode);
      this.initForm();
    });
    if (this.editMode) {
    }
    this.bookFG = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      category: new FormControl(""),
      author: new FormControl(""),
      image: new FormControl(""),
      price: new FormControl(""),
    });
  }

  private initForm() {
    // let title = "";
    // let description = "";
    // let category = "";
    // let author = "";
    // let image = "";
    // let price = "";

    if (this.editMode) {
      this.bookService.getData(this.id, this.editMode).subscribe((value) => {
        this.data = value;
        console.log(this.data.data.title);

        this.bookFG.patchValue({
          title: this.data.data.title,
          description: this.data.data.description,
          category: this.data.data.category,
          author: this.data.data.author,
          image: this.data.data.image,
          price: this.data.data.price,
        });
      });
    }
  }

  onSave() {
    if (this.editMode) {
      this.bookService.update(this.id, this.bookFG.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(["/admin/books"]);
      });
    }
    this.bookService.createData(this.bookFG.value).subscribe((response) => {
      const id = response.id;
      // console.log(id);
      this.router.navigate(["/admin/books"]);
    });
  }
  onDelete() {}
}
