import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent implements OnInit {

  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkScroll(); // Verificar el desplazamiento inicial
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const elementPosition = (document.querySelector('.value-section') as HTMLElement)?.offsetTop || 0;
    const elementHeight = (document.querySelector('.value-section') as HTMLElement)?.offsetHeight || 0;

    // Calcula la posición de inicio y fin de la sección de misión
    const startOffset = elementPosition - window.innerHeight;
    const endOffset = elementPosition + elementHeight;

    if (scrollPosition > startOffset && scrollPosition < endOffset) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

}
