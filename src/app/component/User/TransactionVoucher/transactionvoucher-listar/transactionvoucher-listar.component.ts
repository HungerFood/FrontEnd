import { TransactionVoucherService } from './../../../../services/TransactionVoucher/transaction-voucher.service';
import { TransactionVoucher } from './../../../../model/TransactionVoucher/transaction-voucher';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-transactionvoucher-listar',
  templateUrl: './transactionvoucher-listar.component.html',
  styleUrl: './transactionvoucher-listar.component.css'
})
export class TransactionvoucherListarComponent {
  lista:TransactionVoucher[] = [];
  displayedColumns = ['id', 'total_amount','accion01'];
  dataSource = new MatTableDataSource<TransactionVoucher>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private TransactionVoucherService: TransactionVoucherService, 
              private router: Router,
              private dialog:MatDialog){
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.TransactionVoucherService.list().subscribe(data => this.dataSource.data = data);
    //me suscribo
    this.TransactionVoucherService.getList().subscribe(data => {
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
    this.TransactionVoucherService.delete(id).subscribe(()=>{
      this.TransactionVoucherService.list().subscribe(data=>{
        this.TransactionVoucherService.setList(data);
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
