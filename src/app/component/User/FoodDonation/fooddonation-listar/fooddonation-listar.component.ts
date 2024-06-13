import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FoodDonation } from '../../../../model/FoodDonation/food-donation';
import { FoodDonationService } from '../../../../services/FoodDonation/food-donation.service';
import { DialogoFoodListarComponent } from './dialogo-food-listar/dialogo-food-listar.component';

@Component({
  selector: 'app-fooddonation-listar',
  templateUrl: './fooddonation-listar.component.html',
  styleUrl: './fooddonation-listar.component.css'
})
export class FooddonationListarComponent {
  lista: FoodDonation[] = [];
  displayedColumns = ['id', 'food_name', 'specific_description', 'broadcast_date', 'expiration_date', 'typeOfFood', 'accion01', 'accion02'];
  dataSource = new MatTableDataSource<FoodDonation>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private foodDonationService: FoodDonationService,
    private router: Router,
    private dialog: MatDialog) {
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.foodDonationService.list().subscribe(data => {
      console.log(data); // Para depuración
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.foodDonationService.getLista().subscribe(data => {
      console.log(data); // Para depuración
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogoFoodListarComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      } else {
        console.log("FALSE");
      }
    });
  }

  delete(id: string) {
    this.foodDonationService.delete(id).subscribe(() => {
      this.foodDonationService.list().subscribe(data => {
        this.foodDonationService.setList(data);
      })
    });
  }
}
