import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { EditarModalPageRoutingModule } from './editar-modal-routing.module';

import { EditarModalPage } from './editar-modal.page';

@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditarModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarModalPage]
})
export class EditarModalPageModule {}
