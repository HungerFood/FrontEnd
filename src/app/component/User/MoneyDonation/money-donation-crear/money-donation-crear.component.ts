import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoneyDonation } from '../../../../model/MoneyDonation/money-donation';
import { PaymentMethod } from '../../../../model/PaymentMethod/payment-method';
import { MoneyDonationService } from '../../../../services/MoneyDonation/money-donation.service';
import { PaymentMethodService } from '../../../../services/PaymentMethod/payment-method.service';

@Component({
  selector: 'app-money-donation-crear',
  templateUrl: './money-donation-crear.component.html',
  styleUrl: './money-donation-crear.component.css'
})
export class MoneyDonationCrearComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  moneyDonation: MoneyDonation = new MoneyDonation();
  mensaje: string = '';
  lista: PaymentMethod[] = [];
  public id: number = 0;
  edicion: boolean = false;

  constructor(
    private moneyDonationService: MoneyDonationService,
    private router: Router,
    private route: ActivatedRoute,
    private paymentMethod: PaymentMethodService) { }

  ngOnInit(): void {
    this.paymentMethod.list().subscribe(data => { this.lista = data; });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.initForm();
    });

    this.form = new FormGroup({
      id: new FormControl(null),
      total_amount: new FormControl('', [Validators.required]),
      payment_date: new FormControl('', [Validators.required]),
      paymentMethod: new FormControl('', [Validators.required]),
    });
  }

  initForm(): void {
    if (this.edicion) {
      this.moneyDonationService.listById(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          total_amount: new FormControl(data.total_amount),
          payment_date: new FormControl(data.payment_date),
          paymentMethod: new FormControl(data.paymentMethod.type),
        });
      });
    }
  }

  aceptar() {
    this.moneyDonation.id = this.form.value['id'];
    this.moneyDonation.total_amount = this.form.value['total_amount'];
    this.moneyDonation.payment_date = this.form.value['payment_date'];
    this.moneyDonation.paymentMethod = this.form.value['paymentMethod'];

    if (this.id > 0) {
      let a = new PaymentMethod();
      a.id = this.id;
      console.log(a);
      this.moneyDonation.paymentMethod = a;
      console.log(this.moneyDonation);

      if (this.form.valid) {
        if (this.edicion) {
          this.moneyDonationService.update(this.moneyDonation).subscribe((data) => {
            this.moneyDonationService.list().subscribe(data => {
              this.moneyDonationService.setList(data);//(enviando el listado al suscriptor)
            })
          });
        } else {
          console.log(this.moneyDonation);
          this.moneyDonationService.insert(this.moneyDonation).subscribe((data) => {
            this.moneyDonationService.list().subscribe(data => {
              this.moneyDonationService.setList(data);
            })
          });
        }
        this.router.navigate(['principal/donacionesDineroListar']);
      } else {
        this.mensaje = "Agrege campos omitidos";
      }

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
