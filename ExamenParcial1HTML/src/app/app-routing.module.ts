import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../app/guards/auth.guard';
import {Auth2Guard} from '../app/guards/auth2.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate:[Auth2Guard]},
  {
    path: 'formulario-registro',
    loadChildren: () => import('./formulario-registro/formulario-registro.module').then( m => m.FormularioRegistroPageModule)
  },
  {
    path: 'pantalla-inicio',
    loadChildren: () => import('./pantalla-inicio/pantalla-inicio.module').then( m => m.PantallaInicioPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'pantalla-numeros',
    loadChildren: () => import('./pantalla-numeros/pantalla-numeros.module').then( m => m.PantallaNumerosPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'pantalla-editar-usuario',
    loadChildren: () => import('./pantalla-editar-usuario/pantalla-editar-usuario.module').then( m => m.PantallaEditarUsuarioPageModule)
  },
  {
    path: 'pantalla-agregar',
    loadChildren: () => import('./pantalla-agregar/pantalla-agregar.module').then( m => m.PantallaAgregarPageModule)
  },
  {
    path: 'alterar-imagen/:id/:modificacion',
    loadChildren: () => import('./alterar-imagen/alterar-imagen.module').then( m => m.AlterarImagenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
