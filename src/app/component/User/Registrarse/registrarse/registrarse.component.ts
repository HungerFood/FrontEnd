import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../../../model/user";
import { UserService } from "../../../../service/user.service";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  mensaje: string = '';
  //id: number = 0;
  //edicion: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  aceptar() {
    this.user.id = this.form.value['id'];
    this.user.firstName = this.form.value['firstName'];
    this.user.lastName = this.form.value['lastName'];
    this.user.password = this.form.value['password'];
    this.user.email = this.form.value['email'];

    if (this.form.valid) {
      console.log(this.user);
      this.userService.insert(this.user).subscribe((data) => {
        this.userService.list().subscribe(data => {
          this.userService.setList(data);
        })
      });
      this.router.navigate(['users']);
    } else {
      this.mensaje = "Agregue campos faltantes";
    }
  }
}