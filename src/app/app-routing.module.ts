import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminBookComponent } from "./admin/admin-books/admin-book/admin-book.component";
import { BookFormComponent } from "./admin/book-form/book-form.component";
import { BookComponent } from "./book/book/book.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./log-in/login/login.component";
import { SignUpComponent } from "./sign-up/sign-up/sign-up.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book", component: BookComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "admin/books/new", component: BookFormComponent },
  { path: "admin/books/:id", component: AdminBookComponent },
  { path: "admin/books", component: AdminBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
