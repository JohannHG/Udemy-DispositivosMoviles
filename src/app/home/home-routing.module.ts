import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CursosInfoComponent } from './cursos-info/cursos-info.component';
import { CentroComercialPage } from '../centro-comercial/centro-comercial.page';

const routes: Routes = [
  {
    path: '',
    // component: HomePage,
    component: CentroComercialPage,
  },
  {
    path:'',
    redirectTo: 'CentroComercialPageRoutingModule',
    pathMatch: 'full'
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
