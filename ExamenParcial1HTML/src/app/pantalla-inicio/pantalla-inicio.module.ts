import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaInicioPageRoutingModule } from './pantalla-inicio-routing.module';

import { PantallaInicioPage } from './pantalla-inicio.page';
import { PantallaNumerosPageRoutingModule } from '../pantalla-numeros/pantalla-numeros-routing.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaInicioPageRoutingModule
    
  ],
  declarations: [PantallaInicioPage]
})

export class PantallaInicioPageModule {}
