import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {
  courses = [
    {
      title: 'Python Practicando: Desde 0 hasta Desarrollador en Python',
      instructor: 'Álvaro Chirou',
      price: 729,
      rating: 4.5,
      image: 'assets/cursos/python/p1.PNG',
      description: 'Curso completo para aprender Python desde cero.'
    },
    {
      title: 'Universidad Python - Cero a Experto',
      instructor: 'Global Mentoring Ing. Ubaldo Acosta',
      price: 749,
      rating: 4.8,
      image: 'assets/cursos/python/p2.PNG',
      description: 'Curso avanzado de Python actualizado.'
    },
    {
      title: 'Python para no matemáticos: De 0 hasta reconocimiento facial',
      instructor: 'Código 369, Academia Apps',
      price: 899,
      rating: 4.2,
      image: 'assets/cursos/python/p3.PNG',
      description: 'Aprende Python sin conocimientos avanzados en matemáticas.'
    },
    {
      title: 'Python 3 Plus: Python desde Cero + Data Analysis',
      instructor: 'DataBoosters Academy',
      price: 649,
      rating: 4.6,
      image: 'assets/cursos/python/p4.PNG',
      description: 'Aprende Python y análisis de datos.'
    },
    {
      title: 'Curso Maestro de Python: De Cero a Programador',
      instructor: 'Héctor Costa Guzmán',
      price: 1049,
      rating: 4.8,
      image: 'assets/cursos/python/p5.PNG',
      description: 'Curso completo para convertirte en programador experto en Python.'
    },
  ];
}
