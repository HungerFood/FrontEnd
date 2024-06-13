import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../../../model/Credentials/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  creds: Credentials = {
    username: "",
    password: ""
  }

  constructor(
    
  ) {}

  login(form: NgForm) {
    if (form.valid) {
      // Aquí puedes implementar la lógica de inicio de sesión
      console.log(this.creds);
    }
  }

}
