import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {


  constructor(private router: Router) { }  // Inyecta el Router en el constructor


  // Categoría seleccionada
  categorias: string = 'python';

  courses = [
    {
      id: 1,
      titulo: 'Python Practicando: Desde 0 hasta Desarrollador en Python',
      instructor: 'Álvaro Chirou',
      price: 729,
      rating: 4.5,
      image: 'assets/cursos/python/p1.PNG',
      description: 'Curso completo para aprender Python desde cero.',
      categoria: 'python'
    },
    {
      id: 2,
      titulo: 'Universidad Python - Cero a Experto',
      instructor: 'Global Mentoring Ing. Ubaldo Acosta',
      price: 149,
      rating: 4.8,
      image: 'assets/cursos/python/p2.PNG',
      description: 'Curso avanzado de Python actualizado.',
      categoria: 'python'
    },
    {
      id: 3,
      titulo: 'Python para no matemáticos',
      instructor: 'Codigo 369, Academia Apps',
      price: 199,
      rating: 4.2,
      image: 'assets/cursos/python/p3.PNG',
      description: 'Curso avanzado de Python para no matemáticos.',
      categoria: 'python'
    },
    {
      id: 4,
      titulo: 'Python 3 plus',
      instructor: 'DataBoosters Academy',
      price: 199,
      rating: 4.6,
      image: 'assets/cursos/python/p4.PNG',
      description: 'Python desde cero + Data Analysis y Matplot',
      categoria: 'python'
    },
    {
      id: 5,
      titulo: 'Curso Maestro de python',
      instructor: 'Héctor Costa Guzmán',
      price: 199,
      rating: 4.8,
      image: 'assets/cursos/python/p5.PNG',
      description: 'De cero a programador.',
      categoria: 'python'
    },
    {
      id: 6,
      titulo: 'Programacion con python',
      instructor: 'Jose Ojeda Rojas',
      price: 199,
      rating: 4.4,
      image: 'assets/cursos/python/p5.PNG',
      description: 'De cero a programador.',
      categoria: 'python'
    },
    {
      id: 7,
      titulo: 'Universidad Excel',
      instructor: 'Global Mentoring Ing. Ubaldo Acosta',
      price: 199,
      rating: 4.7,
      image: 'assets/cursos/excel/1.PNG',
      description: 'Básico, intermedio y avanzado.',
      categoria: 'excel'
    },
    {
      id: 8,
      titulo: 'Excel completo',
      instructor: 'Miguel Maraby',
      price: 179,
      rating: 4.7,
      image: 'assets/cursos/excel/2.PNG',
      description: 'Principiante hasta avanzado.',
      categoria: 'excel'
    },
    {
      id: 9,
      titulo: 'Excel y Power BI',
      instructor: 'datdata - Guillermo Perdomo Sosa',
      price: 199,
      rating: 4.8,
      image: 'assets/cursos/excel/3.PNG',
      description: 'Análisis y Visualización de datos.',
      categoria: 'excel'
    },
    {
      id: 10,
      titulo: 'Excel',
      instructor: 'Johny Mora',
      price: 179,
      rating: 4.6,
      image: 'assets/cursos/excel/4.PNG',
      description: 'Para principiantes enfocado a los negocios.',
      categoria: 'excel'
    },
    {
      id: 11,
      titulo: 'Formulas y funciones en Microsoft Excel',
      instructor: 'DataBoosters Academy, Luis Reyes',
      price: 149,
      rating: 5.0,
      image: 'assets/cursos/excel/5.PNG',
      description: 'Aprende a usar Excel desde cero.',
      categoria: 'excel'
    },
    {
      id: 12,
      titulo: 'Desarrollo Web completo',
      instructor: 'Juan Pabloo De la Torre Valdez',
      price: 179,
      rating: 4.8,
      image: 'assets/cursos/web/1.PNG',
      description: 'HTML5, CSS3, JS, AJAX, PHP, etc.',
      categoria: 'desarrolloWeb'
    },
    {
      id: 13,
      titulo: 'Aprende JavaScript y Jquery',
      instructor: 'Manuel Muñoz',
      price: 349,
      rating: 4.9,
      image: 'assets/cursos/web/2.PNG',
      description: 'Curso completo de 0 a 100.',
      categoria: 'desarrolloWeb'
    },
    {
      id: 14,
      titulo: 'Escuela de Programación y Desarrollo Web',
      instructor: 'Axel Roel ChB',
      price: 199,
      rating: 4.2,
      image: 'assets/cursos/web/3.PNG',
      description: 'Curso completo de desarrollo web.',
      categoria: 'desarrolloWeb'
    },
    {
      id: 15,
      titulo: 'Universidad JavaScript',
      instructor: 'Global Mentoring Ing. Ubaldo Acosta',
      price: 199,
      rating: 4.6,
      image: 'assets/cursos/javascript/1.PNG',
      description: 'De cero a Experto JavaScript.',
      categoria: 'javascript'
    },
    {
      id: 16,
      titulo: 'JavaScript Moderno',
      instructor: 'Juan Pablo De la Torre Valdez',
      price: 179,
      rating: 4.7,
      image: 'assets/cursos/javascript/2.PNG',
      description: 'Guia definitiva.',
      categoria: 'javascript'
    },
    {
      id: 17,
      titulo: 'Full Stack JavaScript Developer en Español',
      instructor: 'JavaScript Master',
      price: 149,
      rating: 5.0,
      image: 'assets/cursos/javascript/3.PNG',
      description: 'Curso avanzado de JavaScript.',
      categoria: 'javascript'
    },

    {
      id: 18,
      titulo: 'Machine Learning de A a la Z',
      instructor: 'SuperDataScience Team',
      price: 179,
      rating: 4.4,
      image: 'assets/cursos/ciencias/1.PNG',
      description: 'Curso avanzado de JavaScript.',
      categoria: 'cienciasInformacion'
    },
    {
      id: 19,
      titulo: 'Python',
      instructor: 'DataBoosters Academy',
      price: 149,
      rating: 4.9,
      image: 'assets/cursos/ciencias/2.PNG',
      description: 'Análisis avanzado para Data Science.',
      categoria: 'cienciasInformacion'
    },
    {
      id: 20,
      titulo: 'R. Curso completo de R',
      instructor: 'Redait Media',
      price: 179,
      rating: 5.0,
      image: 'assets/cursos/ciencias/3.PNG',
      description: 'Para Data Science y Machine.',
      categoria: 'cienciasInformacion'
    },
    {
      id: 21,
      titulo: 'Curso de dibujo cartoon',
      instructor: 'Hector Ulises Gonzalez Ornelas',
      price: 149,
      rating: 5.0,
      image: 'assets/cursos/dibujo/1.PNG',
      description: 'Dibujo.',
      categoria: 'dibujo'
    }
    ,
    {
      id: 22,
      titulo: 'Curso de dibujo',
      instructor: 'Maximiliano León Urgate',
      price: 149,
      rating: 4.8,
      image: 'assets/cursos/dibujo/2.PNG',
      description: 'Intensivo para principiantes, sé un Artista.',
      categoria: 'dibujo'
    }
    ,
    {
      id: 23,
      titulo: 'Experto Dibujo Arquitectoónico',
      instructor: 'Álvaro García',
      price: 149,
      rating: 4.9,
      image: 'assets/cursos/dibujo/3.PNG',
      description: 'Mano alzada, técnico, digital.',
      categoria: 'dibujo'
    }
  ];


  // Función para redirigir
  rutaCurso(courseId: number) {
    this.router.navigate(['home/cursosInfo', courseId]);  // Redirige al curso con el ID correspondiente
  }

  // Función que devuelve los cursos filtrados según la categoría seleccionada
  cursosPorCategoria() {
    return this.courses.filter(course => course.categoria === this.categorias);
  }
}