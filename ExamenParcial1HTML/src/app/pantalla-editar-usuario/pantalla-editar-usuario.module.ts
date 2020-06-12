import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaEditarUsuarioPageRoutingModule } from './pantalla-editar-usuario-routing.module';

import { PantallaEditarUsuarioPage } from './pantalla-editar-usuario.page';
import { ReactiveFormsModule } from '@angular/forms' 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaEditarUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PantallaEditarUsuarioPage]
})
export class PantallaEditarUsuarioPageModule {}
