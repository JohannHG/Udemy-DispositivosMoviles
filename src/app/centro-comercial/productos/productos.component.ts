import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  product=[{
    id: "prodct1",
    nombreProct: "Pulsar NS125",
    descripcionProduct:"Motocicleta",
    precioProduct: "$34,000",
    imgProduct: "../",
    departamentoProduct: "motocicletas"
  },
  {
    id: "prodct2",
    nombreProct: "Pulsar NS125 UG",
    descripcionProduct:"Motocicleta",
    precioProduct: "$34,000",
    imgProduct: "../",
    departamentoProduct: "motocicletas"
  },
  {
    id: "prodct3",
    nombreProct: "Pulsar NS160 UG",
    descripcionProduct:"Motocicleta",
    precioProduct: "$34,000",
    imgProduct: "../",
    departamentoProduct: "motocicletas"
  },
  {
    id: "prodct4",
    nombreProct: "Pulsar NS200 UG",
    descripcionProduct:"Motocicleta",
    precioProduct: "$34,000",
    imgProduct: "../",
    departamentoProduct: "motocicletas"
  },
  {
    id: "prodct5",
    nombreProct: "Pulsar RS200",
    descripcionProduct:"Motocicleta",
    precioProduct: "$64,000",
    imgProduct: "../",
    departamentoProduct: "motocicletas"
  },
  {
    id: "prodct6",
    nombreProct: "Pulsar N160",
    descripcionProduct:"Motocicleta",
    precioProduct: "$47,000",
    imgProduct: "../",
    departamentoProduct: "motocicletas"
  },{
    id: "prodct1",
    nombreProct: "Pulsar N250",
    descripcionProduct:"Motocicleta",
    precioProduct: "$60,000",
    imgProduct: "../",
    departamentoProduct: "motocicletas"
  }]

  constructor() { }

  ngOnInit() {}

}
