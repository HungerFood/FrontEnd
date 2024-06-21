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
    private paymentMethod: PaymentMethodService
  ) {
    this.form = new FormGroup({
      id: new FormControl(),
      total_amount: new FormControl('', [Validators.required]),
      payment_date: new FormControl('', [Validators.required]),
      paymentMethod: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.paymentMethod.list().subscribe(data => {
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
      this.moneyDonationService.listById(this.id).subscribe((data) => {
        this.form.setValue({
          id: data.id,
          total_amount: data.total_amount,
          payment_date: data.payment_date,
          paymentMethod: data.paymentMethod.id // Set as ID,
        });
      });
    }
  }

  aceptar() {
    if (this.form.valid) {
      const paymentMethodId = this.form.value['paymentMethod'];
      const selectedPaymentMethod = this.lista.find(type => type.id === paymentMethodId);

      if (!selectedPaymentMethod) {
        this.mensaje = "Tipo de comida seleccionado no válido.";
        return;
      }

      this.moneyDonation.id = this.form.value['id'];
      this.moneyDonation.total_amount = this.form.value['total_amount'];
      this.moneyDonation.payment_date = this.form.value['payment_date'];
      this.moneyDonation.paymentMethod = selectedPaymentMethod;

      if (this.edicion) {
        this.moneyDonationService.update(this.moneyDonation).subscribe(() => {
          this.moneyDonationService.list().subscribe(data => {
            this.moneyDonationService.setList(data);
            this.router.navigate(['donante/perfil/donacionesDineroCrear/donacionesDineroListar']);
          });
        });
      } else {
        this.moneyDonationService.insert(this.moneyDonation).subscribe(() => {
          this.moneyDonationService.list().subscribe(data => {
            this.moneyDonationService.setList(data);
            this.router.navigate(['donante/perfil/donacionesDineroCrear/donacionesDineroListar']);
          });
        });
      }
    } else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
