import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodDonation } from "../../../../model/food-donation";
import { TypeOfFood } from "../../../../model/type-of-food";
import { FoodDonationService } from "../../../../service/food-donation.service";
import { TypeOfFoodService } from '../../../../service/type-of-food.service';

@Component({
  selector: 'app-fooddonation-crear',
  templateUrl: './fooddonation-crear.component.html',
  styleUrl: './fooddonation-crear.component.css'
})
export class FooddonationCrearComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  foodDonation: FoodDonation = new FoodDonation();
  mensaje: string = '';
  lista: TypeOfFood[] = [];
  public id: number = 0;

  constructor(
    private foodDonationService: FoodDonationService,
    private router: Router,
    private route: ActivatedRoute,
    private typeOfFood:TypeOfFoodService) { }

  ngOnInit(): void {
    this.typeOfFood.list().subscribe(data => { this.lista = data; });

    this.form = new FormGroup({
      id: new FormControl(),
      food_name: new FormControl(),
      specific_description: new FormControl(),
      broadcast_date: new FormControl(),
      expiration_date: new FormControl(),
      typeOfFood: new FormControl(),
    })
  }

  aceptar() {
    this.foodDonation.id = this.form.value['id'];
    this.foodDonation.food_name = this.form.value['food_name'];
    this.foodDonation.specific_description = this.form.value['specific_description'];
    this.foodDonation.broadcast_date = this.form.value['broadcast_date'];
    this.foodDonation.expiration_date = this.form.value['expiration_date'];
    this.foodDonation.typeOfFood = this.form.value['typeOfFood'];

    if (this.id>0) {
      let a = new TypeOfFood();
      a.id = this.id;
      console.log(a);
      this.foodDonation.typeOfFood = a;
      console.log(this.foodDonation);
      this.foodDonationService.insert(this.foodDonation).subscribe(() => {
        this.foodDonationService.list().subscribe(data => {
          this.foodDonationService.setList(data);
        })
      })

      this.router.navigate(['principal/donacionesComida']);

    }

    //if (this.form.valid) {
    //  console.log(this.foodDonation);
    //  this.foodDonationService.insert(this.foodDonation).subscribe((data) => {
    //    this.foodDonationService.list().subscribe(data => {
    //      this.foodDonationService.setList(data);
    //    })
    //  });
    //  this.router.navigate(['principal']);
    //} else {
    //  this.mensaje = "Agregue campos faltantes";
    //}
  }
}
