import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { environment } from "../../environments/environments";
import { MoneyDonation } from "../model/money-donation";
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class MoneyDonationService {
  private url = `${base_url}` //OJO
  private listaCambio = new Subject<MoneyDonation[]>()


  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<MoneyDonation[]>(this.url+"/MoneyDonation/findAll");
  }
  insert(moneyDonation: MoneyDonation) {
    return this.http.post(this.url+"/MoneyDonation/save", moneyDonation);
  }
  setList(listaNueva: MoneyDonation[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
