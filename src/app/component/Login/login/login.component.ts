import { LoginService } from './../../../services/Login/login.service';
import { Component } from '@angular/core';
import { Credentials } from '../../../model/Login/Credencials/credencials';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  creds: Credentials = {
    email: "",
    password: ""
  };

  constructor(private loginService: LoginService, private router: Router) {}

  login(form: NgForm) {
    console.log('form value', form.value);
    this.loginService.login(this.creds)
      .subscribe(response => {
        if (response) {
          const role = this.loginService.getRole();
          switch (role) {
            case 'ADMIN':
              this.router.navigate(['/TypeOfFood/findAll/nuevo']);
              break;
            case 'DONANTE':
              this.router.navigate(['/principal/login/donante/perfil']);
              break;
            default:
              this.router.navigate(['/principal/login']);
          }
        }
      }, error => {
        console.error('Error durante el inicio de sesión:', error);
        // Manejar errores aquí (mostrar mensaje de error al usuario, por ejemplo)
      });
  }
}
