import { LoginService } from './../../../services/Login/login1.service';
import { Component } from '@angular/core';
import { Credentials } from '../../../model/Login/Credencials/credencials';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css'
})
export class Login1Component {
  creds: Credentials= {
    email: "",
    password: ""
 }

  constructor(private LoginService:LoginService,
  private router: Router){};

  getUsers(form: NgForm){
  console.log('Form Value:',form.value);
  return this.LoginService.login(this.creds)
                .subscribe(response => {
                this.router.navigate(['/donante/perfil']);
                })
  }

login(form:NgForm){
  console.log('form value', form.value);
   this.LoginService.login(this.creds)
    .subscribe(response => {
      this.router.navigate(['/donante/perfil']);
    });
}
}
