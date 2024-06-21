import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject, map } from 'rxjs';
import { Credentials } from '../../model/Login/Credencials/credencials';
import { TypeOfFood } from '../../model/TypeOfFood/type-of-food';
import { FoodDonation } from '../../model/FoodDonation/food-donation';
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

}