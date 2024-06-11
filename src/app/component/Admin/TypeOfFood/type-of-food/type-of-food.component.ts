import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-of-food',
  templateUrl: './type-of-food.component.html',
  styleUrl: './type-of-food.component.css'
})
export class TypeOfFoodComponent implements OnInit{
  constructor(public route:ActivatedRoute){}

  ngOnInit(): void {     
  }

}
