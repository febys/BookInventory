import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BookComponent } from "./book/book/book.component";
import { LoginComponent } from "./log-in/login/login.component";
import { SignUpComponent } from "./sign-up/sign-up/sign-up.component";
import { AdminBookComponent } from "./admin/admin-books/admin-book/admin-book.component";
import { BookFormComponent } from "./admin/book-form/book-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    //RouterModule,
    // HttpClientModule,
    //  FormsModule,
    //AppRoutingModule,
    BookComponent,
    LoginComponent,
    SignUpComponent,
    AdminBookComponent,
    BookFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
