import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
const base_url =  environment.base;
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = `${base_url}`
  private listaCambio = new Subject<UsersService[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    console.log(this.url + "/users");
    return this.http.get<UsersService[]> (this.url + "/users");
  }

  setList(listaNueva : UsersService[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
}
