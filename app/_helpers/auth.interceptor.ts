import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private authService:AuthService) {}

  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
  // const authToken = this.authService.getToken();
  //       req = req.clone({
  //           setHeaders: {
  //               Authorization: "Bearer " + authToken
  //           }
  //       });
  //       return next.handle(req);

  const authToken = localStorage.getItem("access_token");

  if (authToken) {
      const cloned = req.clone({
          headers: req.headers.set("Authorization",
              "Bearer " + authToken)
      });

      return next.handle(cloned);
  }
  else {
      return next.handle(req);
  }

    }
 }

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
