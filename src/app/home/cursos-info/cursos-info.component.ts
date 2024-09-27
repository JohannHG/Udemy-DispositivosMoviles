import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-info',
  templateUrl: './cursos-info.component.html',
  styleUrls: ['./cursos-info.component.scss'],
})
export class CursosInfoComponent implements OnInit {

  courseId: number | null = null;  // Inicializa con null por si no hay ID

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el ID del curso desde la URL
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.courseId = +id;  // Convierte a número si el ID existe
    } else {
      console.error('No se encontró el ID del curso en la URL');
    }

  }
}