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
  private url = `${base_url}`
  private listaCambio = new Subject<TransactionVoucher[]>()

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<TransactionVoucher[]>(this.url + "/TransactionVoucher/findAll");
  }

  listId(id: number) {
    return this.http.get<TransactionVoucher>(this.url + "/TransactionVoucher/firstByUser/" + id);
  }

  insert(transactionVoucher: TransactionVoucher) {
    return this.http.post(this.url + '/TransactionVoucher/save', transactionVoucher);
  }
  update(transactionVoucher: TransactionVoucher) {
    return this.http.put(this.url + "/TransactionVoucher/update", transactionVoucher);
  }
  delete(id: string) {
    return this.http.delete(this.url + "/TransactionVoucher/delete/" + id);
  }
  setList(listaNueva: TransactionVoucher[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}
