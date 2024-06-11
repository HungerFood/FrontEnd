import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TransactionVoucher } from '../../model/TransactionVoucher/transaction-voucher';
import { environment } from '../../../environments/environments';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TransactionVoucherService {
  private url = `${base_url}` 
  private listaCambio = new Subject<TransactionVoucher[]>()
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<TransactionVoucher[]> (this.url + "/TransactionVoucher/findAll");
  }
  listId(id:number){
    return this.http.get<TransactionVoucher>(this.url+"/TransactionVoucher/firstByUser/"+id);
  }
  insert(transactionvoucher:TransactionVoucher){
    return this.http.post(this.url+ '/TransactionVoucher/save', transactionvoucher);
  }
  update(tv: TransactionVoucher){
    return this.http.put(this.url + "/TransactionVoucher/update", tv);
  }
  delete(id:string){
    return this.http.delete(this.url + "/TransactionVoucher/delete/" + id);
  }
  setList(listaNueva : TransactionVoucher[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
