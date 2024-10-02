import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-info',
  templateUrl: './cursos-info.component.html',
  styleUrls: ['./cursos-info.component.scss'],
})
export class CursosInfoComponent implements OnInit {

  courseId: number | null = null;  // Inicializa con null por si no hay ID

  cursos = [
    {
      id: 1,
      titulo: 'Python Practicando: Desde 0 hasta Desarrollador en Python',
      instructor: 'Álvaro Chirou',
      price: 729,
      rating: 4.5,
      image: 'assets/cursos/python/p1.PNG',
      description: 'Curso completo para aprender Python desde cero.',
      categoria: 'python',
      actualizacion: '09/2024',
      ap1: 'Ejercitar la lógica de programación',
      ap2: 'Aprender programación desde cero',
      ap3: 'Comprender cómo la vida cotidiana puede ser fácilitada o simulada con código',
      horas: '26'
    },
    {
      id: 2,
      titulo: 'Universidad Python - Cero a Experto',
      instructor: 'Global Mentoring Ing. Ubaldo Acosta',
      price: 149,
      rating: 4.7,
      image: 'assets/cursos/python/p2.PNG',
      description: 'Curso avanzado de Python actualizado.',
      categoria: 'python',
      actualizacion: '08/2024',
      ap1: 'Aprenderán a programar con Python desde cero hasta experto!',
      ap2: 'Programación Orientada a Objetos con Python',
      ap3: 'Creación de Aplicaciones de Escritorio GUI con Tkinter',
      horas: '87'
    },
    {
      id: 3,
      titulo: 'Python para no matemáticos',
      instructor: 'Codigo 369, Academia Apps',
      price: 199,
      rating: 4.2,
      image: 'assets/cursos/python/p3.PNG',
      description: 'Curso avanzado de Python para no matemáticos.',
      categoria: 'python',
      actualizacion: '07/2021',
      ap1: 'Ejercitar la lógica de programación',
      ap2: 'Aprender programación desde cero',
      ap3: 'Reconocimiento facial con python',
      horas: '8'
    },
    {
      id: 4,
      titulo: 'Python 3 plus',
      instructor: 'DataBoosters Academy',
      price: 199,
      rating: 4.6,
      image: 'assets/cursos/python/p4.PNG',
      description: 'Python desde cero + Data Analysis y Matplot',
      categoria: 'python',
      actualizacion: '05/2024',
      ap1: 'Aprenderás a programar en Python 3 desde cero.',
      ap2: 'Aprenderás a instalar los programas necesarios para codificar en Python 3.',
      ap3: 'Sabras utilizar todos los Tipos de Datos que hay en Python 3.',
      horas: '15'
    },
    {
      id: 5,
      titulo: 'Curso Maestro de python',
      instructor: 'Héctor Costa Guzmán',
      price: 199,
      rating: 4.8,
      image: 'assets/cursos/python/p5.PNG',
      description: 'De cero a programador.',
      categoria: 'python',
      actualizacion: '09/2024',
      ap1: 'Aprende a configurar tu entorno de aprendizaje en Windows, Ubuntu y Mac OS.',
      ap2: 'Aprende a instalar y utilizar Jupyter Notebook para apoyar tu aprendizaje.',
      ap3: 'Aprende sobre los tipos de datos compuestos como las colecciones.',
      horas: '36'
    },
    {
      id: 6,
      titulo: 'Programacion con python',
      instructor: 'Jose Ojeda Rojas',
      price: 199,
      rating: 4.4,
      image: 'assets/cursos/python/p6.PNG',
      description: 'De cero a programador.',
      categoria: 'python',
      actualizacion: '09/2024',
      ap1: 'Fundamentos de programación con Python',
      ap2: 'Manipulación de datos con NumPy y Pandas',
      ap3: 'Introducción a SQLite y bases de datos',
      horas: '38'
    },
    {
      id: 7,
      titulo: 'Universidad Excel',
      instructor: 'Global Mentoring Ing. Ubaldo Acosta',
      price: 199,
      rating: 4.7,
      image: 'assets/cursos/excel/1.PNG',
      description: 'Básico, intermedio y avanzado.',
      categoria: 'excel',
      actualizacion: '06/2024',
      ap1: 'Aprenderán temas como: Libros, Hojas, Celdas, Columnas y Renglones (Filas)',
      ap2: 'Aprenderán a utilizar Microsoft Excel desde Cero hasta Avanzado',
      ap3: 'Manejo de Fórmulas y Funciones desde básico hasta avanzado',
      horas: '14'
    },
    {
      id: 8,
      titulo: 'Excel completo',
      instructor: 'Miguel Maraby',
      price: 179,
      rating: 4.7,
      image: 'assets/cursos/excel/2.PNG',
      description: 'Principiante hasta avanzado.',
      categoria: 'excel',
      actualizacion: '09/2024',
      ap1: 'Tendrás Una VENTAJA INJUSTA Cuando Aspires a un Empleo. Estarás Muy Por Encima de la Competencia.',
      ap2: 'Dominarás Funciones Avanzadas Que el 97% de Los Empleados NO SABEN Que Existen',
      ap3: 'IMPRESIONA a tu Jefe! Desbloqueando Fórmulas Dinámicas Con Funciones SI, BUSCARV, INDICE, COINCIDIR y muchas más. Será más fácil que sumar 2+2',
      horas: '16'
    },
    {
      id: 9,
      titulo: 'Excel y Power BI',
      instructor: 'datdata - Guillermo Perdomo Sosa',
      price: 199,
      rating: 4.8,
      image: 'assets/cursos/excel/3.PNG',
      description: 'Análisis y Visualización de datos.',
      categoria: 'excel',
      actualizacion: '09/2024',
      ap1: 'Transformarás datos en asombrosas visualizaciones interactivas con Excel y Power BI.',
      ap2: 'Certifícate y empieza a ser más productivo en tus actividades: ¡Analiza y toma decisiones rápidamente!',
      ap3: 'Cualquier persona sin importar su ocupación aprenderá a realizar informes de una manera muy dinámica.',
      horas: '13'
    },
    {
      id: 10,
      titulo: 'Excel',
      instructor: 'Johny Mora',
      price: 179,
      rating: 4.6,
      image: 'assets/cursos/excel/4.PNG',
      description: 'Para principiantes enfocado a los negocios.',
      categoria: 'excel',
      actualizacion: '09/2024',
      ap2: 'Transformarás datos en asombrosas visualizaciones interactivas con Excel y Power BI.',
      ap1: 'Certifícate y empieza a ser más productivo en tus actividades: ¡Analiza y toma decisiones rápidamente!',
      ap3: 'Cualquier persona sin importar su ocupación aprenderá a realizar informes de una manera muy dinámica.',
      horas: '13'
    },
    {
      id: 11,
      titulo: 'Formulas y funciones en Microsoft Excel',
      instructor: 'DataBoosters Academy, Luis Reyes',
      price: 149,
      rating: 5.0,
      image: 'assets/cursos/excel/5.PNG',
      description: 'Aprende a usar Excel desde cero.',
      categoria: 'excel',
      actualizacion: '09/2024',
      ap3: 'Transformarás datos en asombrosas visualizaciones interactivas con Excel y Power BI.',
      ap2: 'Certifícate y empieza a ser más productivo en tus actividades: ¡Analiza y toma decisiones rápidamente!',
      ap1: 'Cualquier persona sin importar su ocupación aprenderá a realizar informes de una manera muy dinámica.',
      horas: '23'
    },
    {
      id: 12,
      titulo: 'Desarrollo Web completo',
      instructor: 'Juan Pabloo De la Torre Valdez',
      price: 179,
      rating: 4.8,
      image: 'assets/cursos/web/1.PNG',
      description: 'HTML5, CSS3, JS, AJAX, PHP, etc.',
      categoria: 'desarrolloWeb',
      actualizacion: '06/2024',
      ap1: 'Crear un íncreible Portafolio con muchos proyectos que te ayudarán a obtener un empleo',
      ap2: 'Aprender y Dominar HTML y CSS para crear diseños modernos siguiendo buenas prácticas',
      ap3: 'Crear páginas web con HTML y CSS que puedas vender a tus clientes',
      horas: '84'
    },
    {
      id: 13,
      titulo: 'Aprende JavaScript y Jquery',
      instructor: 'Manuel Muñoz',
      price: 349,
      rating: 4.9,
      image: 'assets/cursos/web/2.PNG',
      description: 'Curso completo de 0 a 100.',
      categoria: 'desarrolloWeb',
      actualizacion: '04/2020',
      ap1: 'Programación JavaScript',
      ap2: 'Aprender y Dominar HTML y CSS para crear diseños modernos siguiendo buenas prácticas',
      ap3: 'Crear páginas web con HTML y CSS que puedas vender a tus clientes',
      horas: '4'
    },
    {
      id: 14,
      titulo: 'Escuela de Programación y Desarrollo Web',
      instructor: 'Axel Roel ChB',
      price: 199,
      rating: 4.2,
      image: 'assets/cursos/web/3.PNG',
      description: 'Curso completo de desarrollo web.',
      categoria: 'desarrolloWeb',
      actualizacion: '09/2024',
      ap1: 'Utiliza el Lenguaje de Marcado de Hipertexto (HTML), darle estructurar, desplegar una página web y sus contenidos.',
      ap2: 'Maquetar sitios web estáticos usando HTML y CSS.',
      ap3: 'Utiliza el Lenguaje de Hojas de estilo en cascada (CSS), personalizar y diseñar una página web, describe cómo se deben mostrar los elementos HTML.',
      horas: '76'
    },
    {
      id: 15,
      titulo: 'Universidad JavaScript',
      instructor: 'Global Mentoring Ing. Ubaldo Acosta',
      price: 199,
      rating: 4.6,
      image: 'assets/cursos/javascript/1.PNG',
      description: 'De cero a Experto JavaScript.',
      categoria: 'javascript',
      actualizacion: '09/2024',
      ap1: 'Convertirse de un total principiante a un desarrollador avanzado de JavaScript',
      ap2: 'Fundamentos de JavaScript y programación: variables, lógica booleana, if / else, bucles, funciones, matrices, etc.',
      ap3: 'Una verdadera comprensión de cómo funciona JavaScript a detalle.',
      horas: '44'
    },
    {
      id: 16,
      titulo: 'JavaScript Moderno',
      instructor: 'Juan Pablo De la Torre Valdez',
      price: 179,
      rating: 4.7,
      image: 'assets/cursos/javascript/2.PNG',
      description: 'Guia definitiva.',
      categoria: 'javascript',
      actualizacion: '03/2024',
      ap1: 'Aprenderás a consumir distintas REST APIS con JSON y Fetch API + Async / Await, uno de los temas más importantes como desarrollador JavaScript',
      ap2: 'JavaScript es el lenguaje más buscado por los empleadores hoy en día',
      ap3: 'Aprenderás Lo básico del lenguaje así como conceptos más avanzados',
      horas: '52'
    },
    {
      id: 17,
      titulo: 'Full Stack JavaScript Developer en Español',
      instructor: 'JavaScript Master',
      price: 149,
      rating: 5.0,
      image: 'assets/cursos/javascript/3.PNG',
      description: 'Curso avanzado de JavaScript.',
      categoria: 'javascript',
      actualizacion: '09/2024',
      ap1: 'Aprende desde HTML, Javascript, ajax, nodejs, vuejs, react js, rest APIs y GraphQL',
      ap2: 'JavaScript es el lenguaje más buscado por los empleadores hoy en día',
      ap3: 'Aprenderás Lo básico del lenguaje así como conceptos más avanzados',
      horas: '59'
    },

    {
      id: 18,
      titulo: 'Machine Learning de A a la Z',
      instructor: 'SuperDataScience Team',
      price: 179,
      rating: 4.4,
      image: 'assets/cursos/ciencias/1.PNG',
      description: 'Curso avanzado de JavaScript.',
      categoria: 'cienciasInformacion',
      actualizacion: '09/2024',
      ap1: 'Dominar el Machine Learning con R y con Python.',
      ap2: 'Hacer predicciones precisas y acertadas.',
      ap3: 'Tener intuición en la mayoría de modelos de Machine Learning.',
      horas: '51'
    },
    {
      id: 19,
      titulo: 'Python',
      instructor: 'DataBoosters Academy',
      price: 149,
      rating: 4.9,
      image: 'assets/cursos/ciencias/2.PNG',
      description: 'Análisis avanzado para Data Science.',
      categoria: 'cienciasInformacion',
      actualizacion: '05/2024',
      ap1: 'Aprenderás a crear arrays, sus propiedades, modificarlos y a hacer operaciones.',
      ap2: 'Aprenderás a crear gráficos con Pyplot. Conocerás los diferentes tipos de gráficos, a modificarlos y darle formato.',
      ap3: 'Usarás Pandas para crear series y data frames, también rangos, filtros, funciones y mapping.',
      horas: '5'
    },
    {
      id: 20,
      titulo: 'R. Curso completo de R',
      instructor: 'Redait Media',
      price: 179,
      rating: 5.0,
      image: 'assets/cursos/ciencias/3.PNG',
      description: 'Para Data Science y Machine.',
      categoria: 'cienciasInformacion',
      actualizacion: '09/2024',
      ap1: 'Aprenderás a programar en R mediante la herramienta RStudio',
      ap2: 'Aprenderás a crear visualizaciones de datos con R y RStudio',
      ap3: 'Aprenderás R para Data Science',
      horas: '8'
    },
    {
      id: 21,
      titulo: 'Curso de dibujo cartoon',
      instructor: 'Hector Ulises Gonzalez Ornelas',
      price: 149,
      rating: 5.0,
      image: 'assets/cursos/dibujo/1.PNG',
      description: 'Dibujo.',
      categoria: 'dibujo',
      actualizacion: '01/2021',
      ap1: 'En este curso aprenderás las técnicas de los profesionales para dibujar al estilo cartoon',
      ap2: 'Aprenderán a manejar el lápiz con soltura, podrán identificar luces, sombras y todos los elementos básicos del dibujo en cualquier objeto y poder trasladarlas al papel. En fin, serán capaces de manejar los conceptos básicos del dibujo artístico.',
      ap3: 'Comprender cómo la vida cotidiana puede ser fácilitada o simulada con código',
      horas: '4'
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
      categoria: 'dibujo',
      actualizacion: '09/2024',
      ap1: 'Ejercitar la lógica de programación',
      ap3: 'En este curso aprenderás las técnicas de los profesionales para dibujar al estilo cartoon',
      ap2: 'Aprenderán a manejar el lápiz con soltura, podrán identificar luces, sombras y todos los elementos básicos del dibujo en cualquier objeto y poder trasladarlas al papel. En fin, serán capaces de manejar los conceptos básicos del dibujo artístico.',
      horas: '9'
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
      categoria: 'dibujo',
      actualizacion: '08/2024',
      ap1: 'El curso más vendido de Dibujo Arquitectónico. Mano Alzada, Técnico, Digital en Udemy',
      ap2: 'Cuando compres el curso (Experto Dibujo Arquitectónico. Mano Alzada, Técnico, Digita) vas a poder acceder a las clases cuando y donde quieras. El curso se queda',
      ap3: 'Interés por adquirir conocimientos sobre materiales de construcción para poder aplicar como decorador de interiores a nivel profesional.',
      horas: '22'
    }
  ];

  cursoSeleccionado: any = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el ID del curso desde la URL
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.courseId = +id;
      this.cargarCurso();  // Cargar el curso seleccionado
    } else {
      console.error('No se encontró el ID del curso en la URL');
    }
  }

  cargarCurso() {
    this.cursoSeleccionado = this.cursos.find(curso => curso.id === this.courseId);
  }
}