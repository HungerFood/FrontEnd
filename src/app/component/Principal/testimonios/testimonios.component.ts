import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent implements OnInit, OnDestroy  {
  testimonios = [
    {
      nombre: 'Paul Stanley',
      imagen: './assets/Images/Main/img_testimonios/img_PauStanley.png',
      contenido: 'HungerFood ha sido una bendición para nuestra comunidad. Gracias a sus donaciones de alimentos, muchas familias han podido tener comidas nutritivas en sus mesas. Su apoyo económico también ha sido crucial para ayudar a las familias a cubrir necesidades básicas. Estamos inmensamente agradecidos por su generosidad y compromiso con los más necesitados.'
    },
    {
      nombre: 'Steve Jobs',
      imagen: './assets/Images/Main/img_testimonios/img_SteveJobs.png',
      contenido: 'Nunca pensé que necesitaría ayuda para alimentar a mi familia, pero la vida tiene sus desafíos. HungerFood nos ha proporcionado no solo alimentos frescos y saludables, sino también apoyo económico en momentos críticos. No sé qué habríamos hecho sin su ayuda. Su labor es realmente invaluable.'
    },
    {
      nombre: 'Elon Musk',
      imagen: './assets/Images/Main/img_testimonios/img_ElonMusk.png',
      contenido: 'En nuestra fundación, colaboramos con varias organizaciones, pero HungerFood se destaca por su enfoque en la donación de alimentos y apoyo económico. Su profesionalismo y dedicación aseguran que las ayudas lleguen a quienes más lo necesitan. Es un honor trabajar junto a ellos y ver de primera mano el impacto positivo que generan.'
    }
    
  ];

  activeIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 5000); // Cambia cada 5 segundos
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonios.length;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval); // Limpiar el intervalo cuando se destruye el componente
  }
}
