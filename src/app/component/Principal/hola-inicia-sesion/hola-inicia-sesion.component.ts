import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hola-inicia-sesion',
  templateUrl: './hola-inicia-sesion.component.html',
  styleUrl: './hola-inicia-sesion.component.css'
})
export class HolaIniciaSesionComponent {
  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/principal/perfil']);
  }
}
