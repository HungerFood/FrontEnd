import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environments';
import { MoneyDonation } from '../../model/MoneyDonation/money-donation';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class MoneyDonationService {
  private url = `${base_url}`
  private listaCambio = new Subject<MoneyDonation[]>()

  constructor(private http: HttpClient) { }
  list(): Observable<any>{
    return this.http.get<MoneyDonation[]>(this.url + "/MoneyDonation/findAll");
  }
  insert(moneyDonation: MoneyDonation) {
    return this.http.post(this.url + "/MoneyDonation/save", moneyDonation);
  }
  update(moneyDonation: MoneyDonation) {
    return this.http.put(this.url + "/MoneyDonation/update", moneyDonation);
  }
  delete(id: string) {
    return this.http.delete(this.url + "/MoneyDonation/delete/" + id);
  }
  setList(listaNueva: MoneyDonation[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
