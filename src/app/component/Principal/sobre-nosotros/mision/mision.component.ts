import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrl: './mision.component.css'
})
export class MisionComponent implements AfterViewInit{

  @ViewChild('valueSection') valueSection!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
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
