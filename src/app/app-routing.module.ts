import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminBooksComponent } from "./book/admin-books/admin-books.component";
import { BookFormComponent } from "./book/book-form/book-form.component";
import { BookComponent } from "./book/book.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book", component: BookComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "admin/books/new", component: BookFormComponent },
  { path: "admin/books/:id", component: BookFormComponent },
  { path: "admin/books", component: AdminBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
