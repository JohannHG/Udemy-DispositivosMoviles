import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroComercialPage } from './centro-comercial.page';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: CentroComercialPage,

  },
  {
    path: 'productos',
    component: ProductosComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroComercialPageRoutingModule {}
