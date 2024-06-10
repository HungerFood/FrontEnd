import { TypeOfFood } from './../../../../model/TypeOfFood/type-of-food';
import { TypeOfFoodService } from './../../../../services/TypeOfFood/type-of-food.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-type-of-food-crear',
  templateUrl: './type-of-food-crear.component.html',
  styleUrl: './type-of-food-crear.component.css'
})
export class TypeOfFoodCrearComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  typeoffood: TypeOfFood = new TypeOfFood();
  mensaje: string = '';
  id: number = 0;

  constructor(
    private TypeOfFoodService: TypeOfFoodService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>
    {
      this.id = data['id']; 
      this.init();
     });

    this.form = new FormGroup({
      id: new FormControl(),
      food_type_name: new FormControl('', [Validators.required]),
    })
  }

  init() {
    this.TypeOfFoodService.list().subscribe((data) => {
     this.form = new FormGroup({
      id: new FormControl(data.id),
      food_type_name: new FormControl(data.food_type_name),
     });
     });
    } 

    aceptar(){
      this.typeoffood.id = this.form.value['id'];
      this.typeoffood.food_type_name = this.form.value['food_type_name'];
  
      if (this.form.valid) {
        console.log(this.typeoffood);
        this.TypeOfFoodService.insert(this.typeoffood).subscribe(() => {
          this.TypeOfFoodService.list().subscribe((data: TypeOfFood[]) => {
            this.TypeOfFoodService.setList(data); 
          });
        });
        this.router.navigate(['type-of-food']);
      } else {
        this.mensaje = "Agregue campos omitidos";
      }
    }

}
