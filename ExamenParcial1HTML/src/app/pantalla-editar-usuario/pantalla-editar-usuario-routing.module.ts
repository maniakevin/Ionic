import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaEditarUsuarioPage } from './pantalla-editar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaEditarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaEditarUsuarioPageRoutingModule {}
