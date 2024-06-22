import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrl: './donar.component.css'
})
export class DonarComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    const words = ['Donacion Económica', 'Donacion de Alimentos', 'Comienza a donar hoy!'];
    const id = 'text';
    const colors = ['var(--primary-color)', 'var(--second-color)', 'var(--third-color)'];

    this.consoleText(words, id, colors);

    this.startImageSlider(); // Llama a la función para alternar las imágenes
  }

  consoleText(words: string[], id: string, colors: string[]): void {
    if (colors === undefined) colors = ['#fff'];

    let visible = true;
    const con = document.getElementById('console')!;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id)!;
    target.setAttribute('style', 'color:' + colors[0]);

    setInterval(function() {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(function() {
          const usedColor = colors.shift()!;
          colors.push(usedColor);
          const usedWord = words.shift()!;
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    setInterval(function() {
      if (visible === true) {
        con.className = 'console-underscore hidden';
        visible = false;
      } else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);
  }

  startImageSlider(): void {
    setInterval(() => {
      const images = document.querySelectorAll('.slide-image');
      images.forEach(image => {
        if (image.classList.contains('hidden')) {
          image.classList.remove('hidden');
        } else {
          image.classList.add('hidden');
        }
      });
    }, 10000); // Cambiar cada 10 segundos (10000 milisegundos)
  }
}
