import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FoodDonation } from '../../../../model/FoodDonation/food-donation';
import { TypeOfFood } from '../../../../model/TypeOfFood/type-of-food';
import { FoodDonationService } from '../../../../services/FoodDonation/food-donation.service';
import { TypeOfFoodService } from '../../../../services/TypeOfFood/type-of-food.service';

@Component({
  selector: 'app-fooddonation-crear',
  templateUrl: './fooddonation-crear.component.html',
  styleUrls: ['./fooddonation-crear.component.css']
})
export class FooddonationCrearComponent implements OnInit {
  form: FormGroup;
  foodDonation: FoodDonation = new FoodDonation();
  mensaje: string = '';
  lista: TypeOfFood[] = [];
  public id: number = 0;
  edicion: boolean = false;

  constructor(
    private foodDonationService: FoodDonationService,
    private router: Router,
    private route: ActivatedRoute,
    private typeOfFoodService: TypeOfFoodService
  ) {
    this.form = new FormGroup({
      id: new FormControl(),
      food_name: new FormControl('', [Validators.required]),
      specific_description: new FormControl('', [Validators.required]),
      broadcast_date: new FormControl('', [Validators.required]),
      expiration_date: new FormControl('', [Validators.required]),
      typeOfFood: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.typeOfFoodService.list().subscribe(data => {
      this.lista = data;
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.initForm();
      });
    });
  }

  initForm(): void {
    if (this.edicion) {
      this.foodDonationService.listById(this.id).subscribe((data) => {
        this.form.setValue({
          id: data.id,
          food_name: data.food_name,
          specific_description: data.specific_description,
          broadcast_date: data.broadcast_date,
          expiration_date: data.expiration_date,
          typeOfFood: data.typeOfFood.id // Set as ID
        });
      });
    }
  }

  aceptar() {
    if (this.form.valid) {
      const typeOfFoodId = this.form.value['typeOfFood'];
      const selectedTypeOfFood = this.lista.find(type => type.id === typeOfFoodId);

      if (!selectedTypeOfFood) {
        this.mensaje = "Tipo de comida seleccionado no válido.";
        return;
      }

      this.foodDonation.id = this.form.value['id'];
      this.foodDonation.food_name = this.form.value['food_name'];
      this.foodDonation.specific_description = this.form.value['specific_description'];
      this.foodDonation.broadcast_date = this.form.value['broadcast_date'];
      this.foodDonation.expiration_date = this.form.value['expiration_date'];
      this.foodDonation.typeOfFood = selectedTypeOfFood;

      if (this.edicion) {
        this.foodDonationService.update(this.foodDonation).subscribe(() => {
          this.foodDonationService.list().subscribe(data => {
            this.foodDonationService.setList(data);
            this.router.navigate(['donante/perfil/donacionesComidaCrear/donacionesComidaListar']);
          });
        });
      } else {
        this.foodDonationService.insert(this.foodDonation).subscribe(() => {
          this.foodDonationService.list().subscribe(data => {
            this.foodDonationService.setList(data);
            this.router.navigate(['donante/perfil/donacionesComidaCrear/donacionesComidaListar']);
          });
        });
      }
    } else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
