import { keyframes } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Book } from "./modules/book";

import { BookService } from "./services/book.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  data: Book[] = [];
  bookMetadata: any;
  public length: number;
  categoryB: any;
  filteredCategory: any;
  pageSize: any;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("init");
    this._getDataList();
    this.bookService.getMetaData().subscribe((res) => {
      this.bookMetadata = res.data.fieldMap;

      // console.log(this.bookMetadata.length);
    });
    this.route.queryParamMap.subscribe((parms) => {
      this.categoryB = parms.get("categoryB");
      this.filteredCategory = this.categoryB
        ? this.data.filter((p) => p.category === this.categoryB)
        : this.data;
    });
  }

  private _getDataList(): void {
    this.bookService.getDataList({ fillFieldLabels: true }).subscribe(
      (res) => {
        this.data = res.data.list;
        this.length = res.data.totalRecords;
        this.pageSize = res.data.pageSize;
        console.log(this.pageSize);
      },

      () => console.log("Complete")
    );
  }
}
