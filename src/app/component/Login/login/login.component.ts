import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '../../../model/Login/Credencials/credencials';
import { LoginService } from './../../../services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  creds: Credentials= {
    email: "",
    password: ""
 }

  constructor(private LoginService: LoginService,
  private router: Router){};

  getUsers(form: NgForm){
  console.log('Form Value:',form.value);
  return this.LoginService.login(this.creds)
                .subscribe(response => {
                this.router.navigate(['/admin/perfil']);
                })
  }
  
login(form:NgForm){
  console.log('form value', form.value);
   this.LoginService.login(this.creds)
    .subscribe(response => {
      this.router.navigate(['/admin/perfil']);
    });
}

}
