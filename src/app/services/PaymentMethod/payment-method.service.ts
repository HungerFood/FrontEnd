import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environments';
import { PaymentMethod } from './../../model/PaymentMethod/payment-method';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  private url = `${base_url}`
  private listaCambio = new Subject<PaymentMethod[]>()

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<PaymentMethod[]>(this.url + "/PaymentMethod/findAll");
  }

  //*****NO HAY UN METODO PARA LISTAR POR ID EN EL BACKEND*****
  //listId(id: number) {
  //  return this.http.get<PaymentMethod>(this.url + "/payment_method/" + id);
  //}

  insert(paymentmethod: PaymentMethod) {
    return this.http.post(this.url + '/PaymentMethod/save', paymentmethod);
  }
  update(pm: PaymentMethod) {
    return this.http.put(this.url + "/PaymentMethod/update", pm);
  }
  delete(id: string) {
    return this.http.delete(this.url + "/PaymentMethod/delete/" + id);
  }
  setList(listaNueva: PaymentMethod[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}
