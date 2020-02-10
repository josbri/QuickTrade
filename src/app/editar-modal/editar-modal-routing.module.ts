import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarModalPage } from './editar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarModalPageRoutingModule {}
