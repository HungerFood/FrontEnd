import { Component, ElementRef, Renderer2, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent implements OnInit {

  @ViewChild('valueSection') valueSection!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Hacer scroll hacia arriba al iniciar el componente
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Verificar posición de la sección en caso de animaciones adicionales
    this.checkScroll();
  }

  checkScroll(): void {
    const componentPosition = this.valueSection.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition > componentPosition) {
      this.renderer.addClass(this.valueSection.nativeElement, 'visible');
    } else {
      this.renderer.removeClass(this.valueSection.nativeElement, 'visible');
    }
  }

}
