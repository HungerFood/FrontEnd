import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { FoodDonation } from "../../../../model/food-donation";
import { FoodDonationService } from "../../../../service/food-donation.service";

@Component({
  selector: 'app-fooddonation',
  templateUrl: './fooddonation.component.html',
  styleUrl: './fooddonation.component.css'
})
export class FooddonationComponent implements OnInit {
  lista: FoodDonation[] = [];
  displayedColumns = ['id', 'food_name', 'specific_description', 'broadcast_date', 'expiration_date', 'typeOfFood'];
  dataSource = new MatTableDataSource<FoodDonation>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private foodDonationService: FoodDonationService,
    private router: Router,
    private dialog: MatDialog) {
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.foodDonationService.list().subscribe(data =>
      this.dataSource = new MatTableDataSource(data));
    //me suscribo
    this.foodDonationService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
