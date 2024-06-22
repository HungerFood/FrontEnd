import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaymentMethod } from '../../../../model/PaymentMethod/payment-method';
import { PaymentMethodService } from './../../../../services/PaymentMethod/payment-method.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-payment-method-listar',
  templateUrl: './payment-method-listar.component.html',
  styleUrl: './payment-method-listar.component.css'
})
export class PaymentMethodListarComponent implements OnInit {
  lista:PaymentMethod[] = [];
  displayedColumns = ['id', 'type'];
  dataSource = new MatTableDataSource<PaymentMethod>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private PaymentMethodService: PaymentMethodService,
              private router: Router,
              private dialog:MatDialog
  ) { 
    console.log("Load Constructor");  
  }

  ngOnInit(): void {
    this.PaymentMethodService.list().subscribe(data => this.dataSource.data = data);
    //me suscribo
    this.PaymentMethodService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openDialog(id:string){
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.delete(id);
      }else{
        console.log("FALSE");
      }
    });
  }

  delete(id:string){
    this.PaymentMethodService.delete(id).subscribe(()=>{
      this.PaymentMethodService.list().subscribe(data=>{
        this.PaymentMethodService.setList(data);
      })
    });
  }

  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }

}
