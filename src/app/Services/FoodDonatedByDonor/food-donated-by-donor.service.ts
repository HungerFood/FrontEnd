import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url =  environment.base;

@Injectable({
  providedIn: 'root'
})
export class FoodDonatedByDonorService {
  private url = `${base_url}`
  private listaCambio = new Subject<FoodDonatedByDonorService[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    console.log(this.url + "/cars");
    return this.http.get<FoodDonatedByDonorService[]> (this.url + "/cars");
  }

  insert(car:FoodDonatedByDonorService){
    console.log(this.url + "/cars");
    return this.http.post(this.url+ '/cars', car);
  }

  setList(listaNueva : FoodDonatedByDonorService[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }

  getList(){
    return this.listaCambio.asObservable();
  }

}

