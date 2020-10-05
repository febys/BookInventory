import { keyframes } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

import { BookService } from "../services/book.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  data: any;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    console.log("init");
    this._getDataList();
  }

  private _getDataList(): void {
    this.bookService.getDataList({ fillFieldLabels: true }).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },

      () => console.log("Complete")
    );
  }
}
