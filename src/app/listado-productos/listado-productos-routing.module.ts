import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoProductosPage } from './listado-productos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoProductosPage
  },
  {
    path: 'detalles-productos',
    loadChildren: () => import('./detalles-productos/detalles-productos.module').then( m => m.DetallesProductosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoProductosPageRoutingModule {}
