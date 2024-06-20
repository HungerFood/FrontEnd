import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject, map } from 'rxjs';
import { Credentials } from '../../model/Login/Credencials/credencials';
import { TypeOfFood } from '../../model/TypeOfFood/type-of-food';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = `${baseUrl}`;
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});
  private role: string; // Variable para almacenar el rol del usuario

  constructor(private http: HttpClient) {}

  private listaCambio = new Subject<TypeOfFood[]>();

  login(creds: Credentials) {
    return this.http.post('http://localhost:8080/api/auth/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      console.log(headers.get('Authorization')!);
      const token = bearerToken.replace('Bearer ', '');
      console.log(token);
      localStorage.setItem('token', token);

      // Asumiendo que el rol del usuario viene en el cuerpo de la respuesta
      this.role = body.role;
      localStorage.setItem('role', this.role); // Guarda el rol en localStorage para acceso futuro
      return body;
    }));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole(): string {
    // Obtiene el rol del usuario almacenado en localStorage
    return localStorage.getItem('role') || '';
  }

  closeSession() {
    localStorage.clear();
  }
}