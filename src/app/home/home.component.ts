import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ActivatedRoute, Params } from "@angular/router";
import { BookService } from "../book/services/book.service";
import { DialogComponent } from "../dialogs/dialog/dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  data: any = [];
  length: number;
  id: number;
  boxMode: boolean = false;
  idF: number;
  dataF: any;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.boxMode = params["id"] != null;
      this.openDialog();
    });
    this.bookService.getDataList({ fillFieldLabels: true }).subscribe(
      (res) => {
        this.data = res.data.list;
        this.length = res.data.totalRecords;

        console.log(this.data.id);
      },

      () => console.log("Complete")
    );
  }

  ngOnInit() {
    console.log(this.data);
  }
  public openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

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
