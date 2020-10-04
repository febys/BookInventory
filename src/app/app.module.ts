import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BookComponent } from "./book/book.component";
import { LoginComponent } from "./login/login.component";
import { AdminBooksComponent } from "./admin-books/admin-books.component";
import { BookFormComponent } from "./book-form/book-form.component";
import { SignupComponent } from "./signup/signup.component";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent,
    LoginComponent,
    SignupComponent,
    AdminBooksComponent,
    BookFormComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    // NgModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
  ],
  exports: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
