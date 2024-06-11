import { TransactionVoucherService } from './../../../../services/TransactionVoucher/transaction-voucher.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionVoucher } from '../../../../model/TransactionVoucher/transaction-voucher';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-transactionvoucher-crear',
  templateUrl: './transactionvoucher-crear.component.html',
  styleUrl: './transactionvoucher-crear.component.css'
})
export class TransactionvoucherCrearComponent implements OnInit{
  
  form: FormGroup = new FormGroup({});
  transactionvoucher: TransactionVoucher = new TransactionVoucher();
  mensaje: string = '';
  id: number = 0;

  constructor(
    private TransactionVoucherService: TransactionVoucherService,
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
        total_amount: new FormControl('', [Validators.required]),
      })
  }

  init() {
    this.TransactionVoucherService.list().subscribe((data) => {
     this.form = new FormGroup({
      id: new FormControl(data.id),
      total_amount: new FormControl(data.total_amount),
     });
     });
    }
    
    aceptar(){
      this.transactionvoucher.id = this.form.value['id'];
      this.transactionvoucher.total_amount = this.form.value['total_amount'];
  
      if (this.form.valid) {
        console.log(this.transactionvoucher);
        this.TransactionVoucherService.insert(this.transactionvoucher).subscribe(() => {
          this.TransactionVoucherService.list().subscribe((data: TransactionVoucher[]) => {
            this.TransactionVoucherService.setList(data); 
          });
        });
        this.router.navigate(['/TransactionVoucher/findAll/listar']);
      } else {
        this.mensaje = "Agregue campos omitidos";
      }
    }

}
