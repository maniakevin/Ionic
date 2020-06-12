import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaAgregarPage } from './pantalla-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaAgregarPageRoutingModule {}
