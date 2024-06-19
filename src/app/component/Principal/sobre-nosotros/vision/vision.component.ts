import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {
  @ViewChild('valueSection') valueSection!: ElementRef; // Referencia a la sección principal

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
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
