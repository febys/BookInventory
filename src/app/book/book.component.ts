import { keyframes } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ActivatedRoute, Params } from "@angular/router";
import { DialogComponent } from "../dialogs/dialog/dialog.component";
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
  categoryB: string;
  filteredCategory: any;
  pageSize: any;
  id: number;
  idF: number;
  dataF: any = [];
  boxMode: boolean = false;
  searchText;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    // this._getDataList();
    this.bookService.getDataList({ fillFieldLabels: true }).subscribe((res) => {
      this.data = res.data.list;
      this.length = res.data.totalRecords;
      this.pageSize = res.data.pageSize;
      this.route.queryParamMap.subscribe((parms) => {
        this.categoryB = parms.get("categoryB");
        this.filteredCategory = this.categoryB
          ? this.data.filter((p) => p.category === this.categoryB)
          : this.data;
      });
    });

    this.bookService.getMetaData().subscribe((res) => {
      this.bookMetadata = res.data.fieldMap;
      // console.log(this.bookMetadata);
    });
  }

  ngOnInit() {
    console.log("init");

    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.boxMode = params["id"] != null;
      this.openDialog();
    });
  }

  public openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    if (this.boxMode) {
      this.bookService.getData(this.id, this.boxMode).subscribe((value) => {
        this.idF = value.id;
        this.dataF = value;
        console.log(this.idF);
        console.log(this.dataF.data.title);

        this.dialog.open(DialogComponent, {
          data: {
            title: this.dataF.data.title,
            author: this.dataF.data.author,
            description: this.dataF.data.description,
            category: this.dataF.data.category,
            price: this.dataF.data.price,
            image: this.dataF.data.image,
            nr: this.dataF.data.id,
          },
        });
      });
    }
  }
  private _getDataList(): void {}
}
