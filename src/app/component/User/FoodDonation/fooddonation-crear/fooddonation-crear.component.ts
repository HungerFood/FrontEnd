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
  styleUrl: './fooddonation-crear.component.css'
})
export class FooddonationCrearComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  foodDonation: FoodDonation = new FoodDonation();
  mensaje: string = '';
  lista: TypeOfFood[] = [];
  public id: number = 0;
  edicion: boolean = false;

  constructor(
    private foodDonationService: FoodDonationService,
    private router: Router,
    private route: ActivatedRoute,
    private typeOfFood: TypeOfFoodService) { }

  ngOnInit(): void {
    this.typeOfFood.list().subscribe(data => { this.lista = data; });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.initForm();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      food_name: new FormControl('', [Validators.required]),
      specific_description: new FormControl('', [Validators.required]),
      broadcast_date: new FormControl('', [Validators.required]),
      expiration_date: new FormControl('', [Validators.required]),
      typeOfFood: new FormControl('', [Validators.required]),
    });

    //this.foodDonationService.obtenerTiposDeComida().subscribe((data: any) => {
    //  this.lista = data;
    //});
  }

  initForm(): void {
    if (this.edicion) {
      this.foodDonationService.listById(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          food_name: new FormControl(data.food_name),
          specific_description: new FormControl(data.specific_description),
          broadcast_date: new FormControl(data.broadcast_date),
          expiration_date: new FormControl(data.expiration_date),
          typeOfFood: new FormControl(data.typeOfFood.food_type_name),
        });
      });
    }
  }

  aceptar() {
    this.foodDonation.id = this.form.value['id'];
    this.foodDonation.food_name = this.form.value['food_name'];
    this.foodDonation.specific_description = this.form.value['specific_description'];
    this.foodDonation.broadcast_date = this.form.value['broadcast_date'];
    this.foodDonation.expiration_date = this.form.value['expiration_date'];
    this.foodDonation.typeOfFood = this.form.value['typeOfFood'];

    if (this.id > 0) {
      let t = new TypeOfFood();
      t.id = this.id;
      console.log(t);
      this.foodDonation.typeOfFood = t;
      console.log(this.foodDonation);

      if (this.form.valid) {
        if (this.edicion) {
          this.foodDonationService.update(this.foodDonation).subscribe((data) => {
            console.log(data);
            this.foodDonationService.list().subscribe(data => {
              console.log(data);
              this.foodDonationService.setList(data);//(enviando el listado al suscriptor)
            })
          }, (error) => {
            console.log(error);
          });
        } else {
          console.log(this.foodDonation);
          this.foodDonationService.insert(this.foodDonation).subscribe((data) => {
            console.log(data);
            this.foodDonationService.list().subscribe(data => {
              console.log(data);
              this.foodDonationService.setList(data);
            })
          }, (error) => {
            console.log(error);
          });
        }
        this.router.navigate(['principal/donacionesComidaListar']);
      } else {
        this.mensaje = "Agrege campos omitidos";
      }
    }




    //this.foodDonationService.insert(this.foodDonation).subscribe(() => {
    //  this.foodDonationService.list().subscribe(data => {
    //    this.foodDonationService.setList(data);
    //  })
    //})


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
