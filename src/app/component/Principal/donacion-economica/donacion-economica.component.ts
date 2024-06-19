import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-donacion-economica',
  templateUrl: './donacion-economica.component.html',
  styleUrl: './donacion-economica.component.css'
})
export class DonacionEconomicaComponent implements AfterViewInit {
  constructor(private el: ElementRef) { }

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
