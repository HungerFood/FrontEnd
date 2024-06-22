import { Component } from '@angular/core';
import { User } from '../../../../model/User/user';
import { LoginService } from '../../../../services/Login/login.service';

@Component({
  selector: 'app-perfil-listar',
  templateUrl: './perfil-listar.component.html',
  styleUrl: './perfil-listar.component.css'
})
export class PerfilListarComponent {
  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '', // Ten cuidado con manejar contraseñas en el frontend
    enabled: true
  };

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getUserData().subscribe({
      next: (data) => this.user = data,
      error: (error) => console.error(error)
    });
  }

  updateUser() {
    this.loginService.updateUserData(this.user).subscribe({
      next: (result) => console.log('User updated', result),
      error: (error) => console.error(error)
    });
  }
}
