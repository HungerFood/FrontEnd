// auth-guard-admin.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmin implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verificar si el usuario tiene el rol de "ADMIN"
    // Puedes utilizar un servicio de autenticación para obtener los roles del usuario
    const roles = ['ADMIN'];
    if (roles.includes('ADMIN')) {
      return true;
    } else {
      return false;
    }
  }
}