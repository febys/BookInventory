import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const authHeader: any = {
      Authorization: localStorage.getItem('authToken'),
    };

    return next.handle(
      authHeader.Authorization ? req.clone({ setHeaders: authHeader }) : req
    );
  }
}
