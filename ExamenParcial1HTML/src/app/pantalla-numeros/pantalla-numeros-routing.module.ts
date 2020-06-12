import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaNumerosPage } from './pantalla-numeros.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaNumerosPage,
    children: [
      {
        path: 'pantalla-inicio',
        loadChildren: '../pantalla-inicio/pantalla-inicio.module#PantallaInicioPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaNumerosPageRoutingModule {}
