import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-books",
  templateUrl: "./admin-books.component.html",
  styleUrls: ["./admin-books.component.css"],
})
export class AdminBooksComponent implements OnInit {
  constructor() {}

  public data = [
    {
      name: "therichpost",
      email: "therichpost@gmail.com",
      website: "therichpost.com",
    },
    {
      name: "therichpost",
      email: "therichpost@gmail.com",
      website: "therichpost.com",
    },
    {
      name: "therichpost",
      email: "therichpost@gmail.com",
      website: "therichpost.com",
    },
    {
      name: "therichpost",
      email: "therichpost@gmail.com",
      website: "therichpost.com",
    },
  ];
  title = "angulardatatables";
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 5,
      processing: true,
    };
  }
}
