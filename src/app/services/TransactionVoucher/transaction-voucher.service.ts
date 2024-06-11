import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environments';
import { TransactionVoucher } from '../../model/TransactionVoucher/transaction-voucher';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TransactionVoucherService {
  private url = `${base_url}` //OJOx
  private listaCambio = new Subject<TransactionVoucher[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<TransactionVoucher[]> (this.url + "/PaymentMethod/findAll");
  }

  insert(transactionvoucher:TransactionVoucher){
    return this.http.post(this.url+ '/PaymentMethod/save', transactionvoucher);
  }

  update(tv: TransactionVoucher){
    return this.http.put(this.url + "/PaymentMethod/update", tv);
  }

  delete(id:string){
    return this.http.delete(this.url + "//PaymentMethod/delete/" + id);
  }

  setList(listaNueva : TransactionVoucher[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
