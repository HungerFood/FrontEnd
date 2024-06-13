import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactionvoucher',
  templateUrl: './transactionvoucher.component.html',
  styleUrl: './transactionvoucher.component.css'
})
export class TransactionvoucherComponent implements OnInit{
  constructor(public route:ActivatedRoute){}

  ngOnInit(): void {     
  }
}
