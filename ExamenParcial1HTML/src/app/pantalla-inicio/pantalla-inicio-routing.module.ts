import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaInicioPage } from './pantalla-inicio.page';
import { PantallaNumerosPage } from '../pantalla-numeros/pantalla-numeros.page';;
import { PantallaInicioPageModule } from './pantalla-inicio.module';
const routes: Routes = [
  {
    path: '',
    component: PantallaInicioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaInicioPageRoutingModule {}
