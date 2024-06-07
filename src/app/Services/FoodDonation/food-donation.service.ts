import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environments';
const base_url =  environment.base;
@Injectable({
  providedIn: 'root'
})
export class FoodDonationService {
  private url = `${base_url}`
  private listaCambio = new Subject<FoodDonationService[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    console.log(this.url + "/cars");
    return this.http.get<FoodDonationService[]> (this.url + "/cars");
  }

  insert(car:FoodDonationService){
    console.log(this.url + "/cars");
    return this.http.post(this.url+ '/cars', car);
  }

  setList(listaNueva : FoodDonationService[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
