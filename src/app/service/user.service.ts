import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { environment } from "../../environments/environments";
import { User } from "../model/user";

const base_url = environment.base
//const base_url2 = environment.base2

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}` //OJOx
  //private url2 = `${base_url2}` //OJOx
  private listaCambio = new Subject<User[]>();

  constructor(private http: HttpClient) { }

  list() : Observable<any>{
    return this.http.get<User[]>(this.url+"/users");
  }
  listId(id:number){
    return this.http.get<User>(this.url+"/users/donante/"+id);
  }
  insert(user:User){
    return this.http.post(this.url+ '/auth/register', user);
  }
  update(user: User){
    return this.http.put(this.url + "/users", user);
  }
  delete(id:string){
    return this.http.delete(this.url + "/user/" + id);
  }
  setList(listaNueva : User[]){
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
