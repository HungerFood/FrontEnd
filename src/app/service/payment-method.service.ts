import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environments';
import { PaymentMethod } from '../model/payment-method';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private url = `${base_url}` //OJO
  private listaCambio = new Subject<PaymentMethod[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<PaymentMethod[]>(this.url + "/PaymentMethod/findAll");
  }

  insert(paymentMethod: PaymentMethod) {
    return this.http.post(this.url + "/PaymentMethod/save", paymentMethod);
  }

  setList(listaNueva: PaymentMethod[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
}
