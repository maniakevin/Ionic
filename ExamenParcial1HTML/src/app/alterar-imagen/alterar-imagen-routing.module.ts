import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarImagenPage } from './alterar-imagen.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarImagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarImagenPageRoutingModule {}
