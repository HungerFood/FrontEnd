import { LoginService } from './../../../services/Login/login.service';
import { Component } from '@angular/core';
import { Credentials } from '../../../model/Login/Credencials/credencials';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  creds: Credentials= {
    username: "",
    password: ""
 }

 constructor(private LoginService: LoginService,
  private router: Router){};

getAuthors(form: NgForm){
console.log('Form Value:',form.value);
return this.LoginService.login(this.creds)
                .subscribe(response => {
                this.router.navigate(['/authors']);
                })
}

login(form: NgForm){
  console.log('form value', form.value);
   this.LoginService.login(this.creds)
    .subscribe(response => {
      this.router.navigate(['/authors']);
    });
}

}
