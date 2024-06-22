import { TypeOfFood } from './../../../../model/TypeOfFood/type-of-food';
import { TypeOfFoodService } from './../../../../services/TypeOfFood/type-of-food.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-type-of-food-crear',
  templateUrl: './type-of-food-crear.component.html',
  styleUrls: ['./type-of-food-crear.component.css']
})
export class TypeOfFoodCrearComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  typeoffood: TypeOfFood = new TypeOfFood();
  mensaje: string = '';
  id: number = 0;

  constructor(
    private typeOfFoodService: TypeOfFoodService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      if (this.id) {
        this.init(this.id);
      }
    });

    this.form = new FormGroup({
      id: new FormControl(),
      food_type_name: new FormControl('', [Validators.required]),
    });
  }

  init(id: number) {
    this.typeOfFoodService.listId(id).subscribe((data) => {
      this.form = new FormGroup({
        id: new FormControl(data.id),
        food_type_name: new FormControl(data.food_type_name, [Validators.required]),
      });
    });
  }

  aceptar() {
    this.typeoffood.id = this.form.value['id'];
    this.typeoffood.food_type_name = this.form.value['food_type_name'];

    if (this.form.valid) {
      if (this.typeoffood.id) {
        // Actualizar
        this.typeOfFoodService.update(this.typeoffood).subscribe(() => {
          this.postSave();
        });
      } else {
        // Insertar
        this.typeOfFoodService.insert(this.typeoffood).subscribe(() => {
          this.postSave();
        });
      }
    } else {
      this.mensaje = "Agregue campos omitidos";
    }
  }

  postSave() {
    this.typeOfFoodService.list().subscribe((data: TypeOfFood[]) => {
      this.typeOfFoodService.setList(data);
    });
    this.router.navigate(['/admin/perfil/TypeOfFood/findAll/listar']);
  }
}