import { LoginService } from "../login.service";
import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { EMPTY, Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.loginService.getToken();
    if(token){
      console.log("Intercepto!!");
      const cloned = request.clone({
        headers: request.headers.set('Authorization', "Bearer "+ localStorage.getItem("token")?.toString())
      })
      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Forbidden) {
            //this.loginService.logout();
            alert("No cuentas con los permisos!")
            return EMPTY;
          } else {
            return throwError(() => error);
          }
        })
      );
    };

    return next.handle(request);
  }
}
