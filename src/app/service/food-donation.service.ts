import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { environment } from "../../environments/environments";
import { FoodDonation } from "../model/food-donation";
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class FoodDonationService {
  private url = `${base_url}` //OJO
  private listaCambio = new Subject<FoodDonation[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<FoodDonation[]>(this.url+"/FoodDonation/findAll");
  }
  insert(foodDonation: FoodDonation) {
    return this.http.post(this.url+"/FoodDonation/save", foodDonation);
  }
  setList(listaNueva: FoodDonation[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
