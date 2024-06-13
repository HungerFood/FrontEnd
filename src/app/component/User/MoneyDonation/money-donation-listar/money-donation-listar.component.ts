import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MoneyDonation } from '../../../../model/MoneyDonation/money-donation';
import { MoneyDonationService } from '../../../../services/MoneyDonation/money-donation.service';
import { DialogoMoneyListarComponent } from './dialogo-money-listar/dialogo-money-listar.component';

@Component({
  selector: 'app-money-donation-listar',
  templateUrl: './money-donation-listar.component.html',
  styleUrl: './money-donation-listar.component.css'
})
export class MoneyDonationListarComponent {
  lista: MoneyDonation[] = [];
  displayedColumns = ['id', 'total_amount', 'payment_date', 'paymentMethod', 'accion01', 'accion02'];
  dataSource = new MatTableDataSource<MoneyDonation>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private moneyDonationService: MoneyDonationService,
    private router: Router,
    private dialog: MatDialog
  ) {
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.moneyDonationService.list().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.moneyDonationService.getLista().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogoMoneyListarComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      } else {
        console.log("FALSE");
      }
    });
  }

  delete(id: string) {
    this.moneyDonationService.delete(id).subscribe(() => {
      this.moneyDonationService.list().subscribe(data => {
        this.moneyDonationService.setList(data);
      })
    });
  }
}
