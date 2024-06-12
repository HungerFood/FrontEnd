import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MoneyDonation } from '../../../../model/MoneyDonation/money-donation';
import { MoneyDonationService } from '../../../../services/MoneyDonation/money-donation.service';


@Component({
  selector: 'app-money-donation',
  templateUrl: './money-donation.component.html',
  styleUrl: './money-donation.component.css'
})
export class MoneyDonationComponent implements OnInit {
  lista: MoneyDonation[] = [];
  displayedColumns = ['id', 'total_amount', 'payment_date', 'paymentMethod'];
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
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.moneyDonationService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
