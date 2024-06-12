import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environments';
import { FoodDonation } from '../../model/FoodDonation/food-donation';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class FoodDonationService {
  private url = `${base_url}`
  private listaCambio = new Subject<FoodDonation[]>()

  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<FoodDonation[]>(this.url + "/FoodDonation/findAll");
  }
  insert(foodDonation: FoodDonation) {
    return this.http.post(this.url + "/FoodDonation/save", foodDonation);
  }
  update(foodDonation: FoodDonation) {
    return this.http.put(this.url + "/FoodDonation/update", foodDonation);
  }
  delete(id: string) {
    return this.http.delete(this.url + "/FoodDonation/delete/" + id);
  }
  setList(listaNueva: FoodDonation[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
