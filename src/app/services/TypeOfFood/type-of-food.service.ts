import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TypeOfFood } from '../../model/TypeOfFood/type-of-food';
import { environment } from '../../../environments/environments';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TypeOfFoodService {
  private url = `${base_url}` 
  private listaCambio = new Subject<TypeOfFood[]>()
  constructor(private http: HttpClient) { }

  // <!-- modificar y tiene que ser igual al del backend::----------------------- -->
  list() : Observable<any>{
    return this.http.get<TypeOfFood[]> (this.url + "/TypeOfFood/findAll");
  }
  listId(id:number){
    return this.http.get<TypeOfFood>(this.url+"/TypeOfFood/find/"+id);
  }
  insert(typeoffood:TypeOfFood){
    return this.http.post(this.url+ '/TypeOfFood/save', typeoffood);
  }
  update(tof: TypeOfFood){
    return this.http.put(this.url + "/TypeOfFood/update", tof);
  }
  delete(id:string){
    return this.http.delete(this.url + "/TypeOfFood/delete/" + id);
  }
  setList(listaNueva : TypeOfFood[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
