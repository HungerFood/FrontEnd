import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fooddonation',
  templateUrl: './fooddonation.component.html',
  styleUrl: './fooddonation.component.css'
})
export class FooddonationComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void { }

}
