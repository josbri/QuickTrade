import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {ModalEditarComponent} from './modal-editar.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditarComponent,
  ],
  declarations: [ModalEditarComponent]
})
export class ModalEditarComponentModule {}
