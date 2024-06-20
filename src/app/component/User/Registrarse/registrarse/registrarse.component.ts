import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { User } from '../../../../model/User/user';
import { UserService } from '../../../../services/User/user.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      enabled: new FormControl(true)
    })
  }

  init(){
    if (this.edicion) {
      this.userService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          firstname: new FormControl(data.firstname),
          lastname: new FormControl(data.lastname),
          password: new FormControl(data.password),
          email: new FormControl(data.email),
          enabled: new FormControl(data.enabled)
        });
      });
    }
  }

  aceptar() {
    this.user.id = this.form.value['id'];
    this.user.firstname = this.form.value['firstname'];
    this.user.lastname = this.form.value['lastname'];
    this.user.password = this.form.value['password'];
    this.user.email = this.form.value['email'];

    if (this.form.valid) {
      console.log(this.user);
      this.userService.insert(this.user).subscribe((data) => {
        this.userService.list().subscribe(data => {
          this.userService.setList(data);
        })
      });
      this.router.navigate(['principal/login/donante/perfil']);
    } else {
      this.mensaje = "Agregue campos faltantes";
    }
  }
}