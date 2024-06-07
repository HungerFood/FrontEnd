import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrl: './navbar-principal.component.css'
})
export class NavbarPrincipalComponent implements OnInit{
  constructor(private router : Router){}
  ngOnInit(): void {}
}
