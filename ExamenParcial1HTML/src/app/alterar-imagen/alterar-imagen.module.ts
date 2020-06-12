import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarImagenPageRoutingModule } from './alterar-imagen-routing.module';

import { AlterarImagenPage } from './alterar-imagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarImagenPageRoutingModule
  ],
  declarations: [AlterarImagenPage]
})
export class AlterarImagenPageModule {}
