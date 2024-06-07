import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HungerFood_FrontEnd';
    constructor(public route: ActivatedRoute){}
  ngOnInit(): void { }
}
