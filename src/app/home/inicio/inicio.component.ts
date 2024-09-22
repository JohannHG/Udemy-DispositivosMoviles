import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  currentSlide = 0;

  // Array de imágenes para las diapositivas
  slides = [
    { image: 'assets/1.PNG' },
    { image: 'assets/2.PNG' }
  ];

  // Funciones para avanzar y retroceder en el carrusel
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
