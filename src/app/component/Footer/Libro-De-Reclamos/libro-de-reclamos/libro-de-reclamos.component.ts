import { Component } from '@angular/core';

@Component({
  selector: 'app-libro-de-reclamos',
  templateUrl: './libro-de-reclamos.component.html',
  styleUrl: './libro-de-reclamos.component.css'
})
export class LibroDeReclamosComponent {
  submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario de reclamo
    // Por ejemplo, enviar los datos a un servicio, mostrar un mensaje de éxito, etc.
    alert('Reclamo enviado correctamente');
  }
}
