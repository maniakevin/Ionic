import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaNumerosPageRoutingModule } from './pantalla-numeros-routing.module';

import { PantallaNumerosPage } from './pantalla-numeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaNumerosPageRoutingModule
  ],
  declarations: [PantallaNumerosPage]
})
export class PantallaNumerosPageModule {}
