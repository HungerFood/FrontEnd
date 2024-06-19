import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-donacion-alimento',
  templateUrl: './donacion-alimento.component.html',
  styleUrl: './donacion-alimento.component.css'
})
export class DonacionAlimentoComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    const container = this.el.nativeElement.querySelector('.container');
    if (container) {
      observer.observe(container);
    }
  }
}
