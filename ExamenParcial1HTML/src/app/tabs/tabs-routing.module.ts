import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaNumerosPage } from '../pantalla-numeros/pantalla-numeros.page';

import {AuthGuard} from '../guards/auth.guard';
import {Auth2Guard} from '../guards/auth2.guard'
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,

    children: [
      {
        path: 'pantalla-inicio',
        loadChildren: () => import('../pantalla-inicio/pantalla-inicio.module').then( m => m.PantallaInicioPageModule),canActivate:[AuthGuard]
      },
      {
        path: 'pantalla-numeros',
        loadChildren: () => import('../pantalla-numeros/pantalla-numeros.module').then( m => m.PantallaNumerosPageModule),canActivate:[AuthGuard]
      },
      {
        path: 'editar-usuario',
        loadChildren: () => import('../pantalla-editar-usuario/pantalla-editar-usuario.module').then( m => m.PantallaEditarUsuarioPageModule),canActivate:[AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
