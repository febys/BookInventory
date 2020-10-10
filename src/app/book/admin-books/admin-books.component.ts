import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { BookEntity } from "../modules/booksTdo";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-admin-books",
  templateUrl: "./admin-books.component.html",
  styleUrls: ["./admin-books.component.css"],
})
export class AdminBooksComponent implements OnInit {
  data: any;
  length: any;
  bookMetadata: any;
  editMode: false;
  title = "angulardatatables";
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<BookEntity> = new Subject();
  constructor(private bookService: BookService, private router: Router) {}
  ngOnInit() {
    this.bookService.getData;

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: this.length,
      processing: true,
      lengthChange: true,
    };
    this.bookService.getDataList({ fillFieldLabels: true }).subscribe(
      (res) => {
        this.data = res.data.list;
        this.length = this.data.totalRecords;

        console.log(this.dtOptions);
        console.log(this.length);
        this.dtTrigger.next();
      },

      () => console.log("Complete")
    );
    //  this._getDataList();
    this.bookService.getMetaData().subscribe((res) => {
      this.bookMetadata = res.data.fieldMap;
      // console.log(this.bookMetadata);
    });
  }
  private _getDataList(): void {}
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  onDelete(id: number) {
    this.bookService.deleteData(id).subscribe((value) => {
      // console.log(value);
      this.data.splice(value, id);
    });
  }
}
