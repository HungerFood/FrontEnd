import { PaymentMethodService } from './../../../../services/PaymentMethod/payment-method.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentMethod } from '../../../../model/PaymentMethod/payment-method';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-payment-method-crear',
  templateUrl: './payment-method-crear.component.html',
  styleUrl: './payment-method-crear.component.css'
})
export class PaymentMethodCrearComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  paymentmethod: PaymentMethod = new PaymentMethod();
  mensaje: string = '';
  id: number = 0;
  
  constructor(
    private PaymentMethodService: PaymentMethodService,
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
      type: new FormControl('', [Validators.required]),
      })
    }
  
    init() {
      this.PaymentMethodService.list().subscribe((data) => {
       this.form = new FormGroup({
        id: new FormControl(data.id),
        type: new FormControl(data.type),
       });
       });
      } // del in
  
      aceptar(){
        this.paymentmethod.id = this.form.value['id'];
        this.paymentmethod.type = this.form.value['type'];
    
        if (this.form.valid) {
          console.log(this.paymentmethod);
          this.PaymentMethodService.insert(this.paymentmethod).subscribe(() => {
            this.PaymentMethodService.list().subscribe((data: PaymentMethod[]) => {
              this.PaymentMethodService.setList(data); // Enviar la lista actualizada a los suscriptores
            });
          });
          this.router.navigate(['payment-method']);
        } else {
          this.mensaje = "Agregue campos omitidos";
        }
      }
}
