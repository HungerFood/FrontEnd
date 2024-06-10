import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environments';
import { TypeOfFood } from '../model/type-of-food';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TypeOfFoodService {
  private url = `${base_url}` //OJO
  private listaCambio = new Subject<TypeOfFood[]>()

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<TypeOfFood[]>(this.url + "/TypeOfFood/findAll");
  }

  insert(typeOfFood: TypeOfFood) {
    return this.http.post(this.url + "/TypeOfFood/save", typeOfFood);
  }

  setList(listaNueva: TypeOfFood[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
}
