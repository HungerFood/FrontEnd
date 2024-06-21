import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HungerFood_FrontEnd';
  userRole: string | null = null;

  ngOnInit() {
    // SON DOS ROLES, ADMIN Y DONANTE, LA CUAL CUANDO INCIE SESION, USEN EL NAVBAR CORRESPONDIENTE CADA UNO
    this.userRole = localStorage.getItem('role');
    

  }
}
