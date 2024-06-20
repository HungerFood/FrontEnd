import { LoginService } from './../../services/Login/login.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardDonante implements CanActivate {
  constructor(private LoginService: LoginService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Verificar si el usuario tiene el rol de "DONANTE"
    // Puedes utilizar un servicio de autenticación para obtener los roles del usuario
    const roles = ['DONANTE'];
    if (roles.includes('DONANTE')) {
      return true;
    } else {
      return false;
    }
  }
}