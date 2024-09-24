import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss'],
})
export class DepartamentosComponent  implements OnInit {

  deptos=[{
    idDeptos: "depto1",
    nombre: "Electronica",
    imgDepos: "../assets/centroComercial/Electronica/electronica.jpg",

  },
  {
    idDeptos: "depto2",
    nombre: "Linea blanca",
    imgDepos: "../assets/centroComercial/lineaBlanca/lineaBlanca.jpg",

  },
  {
    idDeptos: "depto3",
    nombre: "Motocicletas",
    imgDepos: "../assets/centroComercial/motocicletas/motos.jpg",

  },
  {
    idDeptos: "depto4",
    nombre: "Relojeria",
    imgDepos: "../assets/centroComercial/relojeria/relojeria.jpg",

  }
]

  constructor() { }

  ngOnInit() {}

}
