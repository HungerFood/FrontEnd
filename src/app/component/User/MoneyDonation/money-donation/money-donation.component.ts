import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-money-donation',
  templateUrl: './money-donation.component.html',
  styleUrl: './money-donation.component.css'
})
export class MoneyDonationComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void { }

}
