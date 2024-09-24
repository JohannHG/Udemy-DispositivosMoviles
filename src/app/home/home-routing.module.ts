import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CursosInfoComponent } from './cursos-info/cursos-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'centrocomercial',
    pathMatch: 'full'
  },
  {
    path: 'centrocomercial',
    loadChildren: () => import('../centro-comercial/centro-comercial.module').then(m => m.CentroComercialPageModule)
  },
  {
    path: 'cursosInfo/:id',
    component: CursosInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
