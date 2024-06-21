import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent {
  @ViewChild('offcanvasNavbar') offcanvasNavbar!: ElementRef; // Referencia al elemento offcanvasNavbar
  isNavbarCollapsed = true; // Estado inicial del menú, colapsado por defecto

  constructor() {}

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed; // Cambia el estado al contrario del estado actual
    if (this.offcanvasNavbar && this.offcanvasNavbar.nativeElement) {
      if (this.isNavbarCollapsed) {
        this.offcanvasNavbar.nativeElement.classList.remove('show'); // Oculta la barra lateral si está colapsada
      } else {
        this.offcanvasNavbar.nativeElement.classList.add('show'); // Muestra la barra lateral si no está colapsada
      }
    }
  }

  closeNavbar(): void {
    this.isNavbarCollapsed = true; // Asegura que el menú esté colapsado
    if (this.offcanvasNavbar && this.offcanvasNavbar.nativeElement) {
      this.offcanvasNavbar.nativeElement.classList.remove('show'); // Oculta la barra lateral
    }
  }
}
