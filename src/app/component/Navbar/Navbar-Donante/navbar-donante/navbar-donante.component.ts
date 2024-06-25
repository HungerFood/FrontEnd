import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-donante',
  templateUrl: './navbar-donante.component.html',
  styleUrl: './navbar-donante.component.css'
})
export class NavbarDonanteComponent {
  @ViewChild('offcanvasNavbar') offcanvasNavbar!: ElementRef; // Referencia al elemento offcanvasNavbar
  isNavbarCollapsed = true; // Estado inicial del menú, colapsado por defecto

  constructor(private router: Router) {}

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
  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    this.router.navigate(['/login/user']);
    
  }
}
