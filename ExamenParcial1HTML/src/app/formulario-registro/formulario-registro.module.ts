import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioRegistroPageRoutingModule } from './formulario-registro-routing.module';

import { FormularioRegistroPage } from './formulario-registro.page';
import { ReactiveFormsModule } from '@angular/forms' 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioRegistroPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [FormularioRegistroPage]
})
export class FormularioRegistroPageModule {}
