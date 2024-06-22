import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';

import { Credentials } from '../../model/Login/Credencials/credencials';
import { TypeOfFood } from '../../model/TypeOfFood/type-of-food';
import { User } from '../../model/User/user';
const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${baseUrl}`;//alt+96
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});
  constructor(private http:HttpClient) { } //inyectar httpClient

  private listaCambio = new Subject<TypeOfFood[]>();
  //modificacion prueba:
  // private listaCambio1 = new Subject<FoodDonation[]>();

  login(creds: Credentials)
  {
      return this.http.post('http://localhost:8080/api/auth/login', creds, {
        observe:'response'
      }).pipe(map((response: HttpResponse<any>) => {
        const body = response.body;
        const headers = response.headers;
        const bearerToken = headers.get('Authorization')!;
        console.log(headers.get('Authorization')!);
        const token = bearerToken.replace('Bearer ', '');
        console.log(token);
        localStorage.setItem('token', token);
        return body;
      }));
  }
  getToken(){
    return localStorage.getItem('token');
  }
  closeSession(){
    localStorage.clear();
  }

  getUserData() {
    const token = this.getToken(); // Usa el método getToken() existente
    if (!token) {
      return throwError('No token found');
    }
    return this.http.get<User>('http://localhost:8080/api/user/profile', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }
  
  updateUserData(userData: User) {
    const token = this.getToken();
    if (!token) {
      return throwError('No token found');
    }
    return this.http.put('http://localhost:8080/api/user/profile', userData, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }

}