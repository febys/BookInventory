import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BookEntity } from "../modules/booksTdo";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-admin-books",
  templateUrl: "./admin-books.component.html",
  styleUrls: ["./admin-books.component.css"],
})
export class AdminBooksComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}
  data: any;
  length: any;
  bookMetadata: any;
  editMode: false;
  title = "angulardatatables";
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.bookService.getData;
    this._getDataList();
    this.bookService.getMetaData().subscribe((res) => {
      this.bookMetadata = res.data.fieldMap;
      // console.log(this.bookMetadata);
    });
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: this.length,
      processing: true,
      lengthChange: true,
    };
  }
  private _getDataList(): void {
    this.bookService.getDataList({ fillFieldLabels: true }).subscribe(
      (res) => {
        this.data = res.data.list;
        this.length = this.data.length;
        console.log(this.length);
      },

      () => console.log("Complete")
    );
  }
  onEdit() {}
  onDelete(id: number) {
    this.bookService.deleteData(id).subscribe((value) => {
      // console.log(value);
      this.data.splice(value, id);
    });
  }
}
