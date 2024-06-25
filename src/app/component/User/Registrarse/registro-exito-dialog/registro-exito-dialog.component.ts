import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-exito-dialog',
  templateUrl: './registro-exito-dialog.component.html',
  styleUrl: './registro-exito-dialog.component.css'
})
export class RegistroExitoDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<RegistroExitoDialogComponent>,
    private router: Router
  ) {}

  onLogin(): void {
    this.dialogRef.close();
    this.router.navigate(['/login1/hola-inicia-sesion']);
  }

}
