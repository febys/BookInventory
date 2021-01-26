import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/authguard.service';
import { AdminBooksComponent } from './book/admin-books/admin-books.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin/books/new',
    component: BookFormComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'admin/books/:id',
    component: BookFormComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'admin/books',
    component: AdminBooksComponent,
    // canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
