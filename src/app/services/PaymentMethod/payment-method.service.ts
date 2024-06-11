import { PaymentMethod } from './../../model/PaymentMethod/payment-method';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environments';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  private url = `${base_url}` 
  private listaCambio = new Subject<PaymentMethod[]>()
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<PaymentMethod[]>(this.url+"/payment_methods");
  }
 listId(id:number){
    return this.http.get<PaymentMethod>(this.url+"/payment_method/"+id);
  }

  insert(paymentmethod:PaymentMethod){
    return this.http.post(this.url+ '/payment_method', paymentmethod);
  }
  update(pm: PaymentMethod){
    return this.http.put(this.url + "/payment_method", pm);
  }
  delete(id:string){
    return this.http.delete(this.url + "/payment_method/" + id);
  }
  setList(listaNueva : PaymentMethod[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
