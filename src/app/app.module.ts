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
import { AdminBooksComponent } from "./book/admin-books/admin-books.component";
import { BookFormComponent } from "./book/book-form/book-form.component";
import { SignupComponent } from "./signup/signup.component";
import { DataTablesModule } from "angular-datatables";
import { BookService } from "./book/services/book.service";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { AppauthService } from "./auth/appauth.service";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import {
  MatNativeDateModule,
  MatStepperModule,
  MatFormFieldModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
} from "@angular/material";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from "./dialogs/dialog/dialog.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { AuthGuardService } from "./auth/authguard.service";
import { RegisterComponent } from './register/register.component';



// Google Authentication Service
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("608387110510-qgbubj06qqika855ivhnk6fqdpvrj1ha.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
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
    DialogComponent,
    RegisterComponent,
  ],
  entryComponents: [DialogComponent],
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
    MatIconModule,
    MatCardModule,
    CarouselModule,
    MatGridListModule,
    Ng2SearchPipeModule,
  ],
  exports: [LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AppauthService,
    BookService,

    // AuthGuardService,
    // {
    //   provide: ,
    //   useFactory: ,
    // },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
