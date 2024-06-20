import { LoginService } from "../login.service";
import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { EMPTY, Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            alert("No cuentas con los permisos necesarios para acceder a este recurso.");
            return EMPTY; // Retorna un observable vacío para cancelar la secuencia
          } else {
            return throwError(() => error); // Propaga el error si no es un Forbidden
          }
        })
      );
    } else {
      // Si no hay token, continua con la solicitud original
      return next.handle(request);
    }
  }

}
