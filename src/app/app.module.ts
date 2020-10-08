import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookComponent } from "./book/book.component";
import { LoginComponent } from "./login/login.component";
import { GoogleLoginProvider } from "angular-6-social-login";
import { SocialLoginModule, AuthServiceConfig } from "angular-6-social-login";
import { AdminBooksComponent } from "./book/admin-books/admin-books.component";
import { BookFormComponent } from "./book/book-form/book-form.component";
import { SignupComponent } from "./signup/signup.component";
import { DataTablesModule } from "angular-datatables";
import { BookService } from "./book/services/book.service";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { AppauthService } from "./auth/appauth.service";
import { BookFormService } from "./book/book-form/book-form.service";
import {
  MatNativeDateModule,
  MatStepperModule,
  MatFormFieldModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
} from "@angular/material";
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";

// Google Authentication Service
export function getAuthServiceConfig() {
  return new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "556932462258-tvl35ac9c14pbc2kpftk1ahtckhtigmj.apps.googleusercontent.com"
      ),
    },
  ]);
}
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
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    SocialLoginModule,
    MatNativeDateModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  exports: [LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AppauthService,
    BookService,
    BookFormService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
