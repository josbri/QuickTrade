import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  {
    path: 'listado-productos',
    loadChildren: () => import('./listado-productos/listado-productos.module').then( m => m.ListadoProductosPageModule)
  },
  {
    path: 'detalles-productos/:id',
    loadChildren: () => import('./listado-productos/detalles-productos/detalles-productos.module').then( m => m.DetallesProductosPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'nuevo-anuncio',
    loadChildren: () => import('./nuevo-anuncio/nuevo-anuncio.module').then( m => m.NuevoAnuncioPageModule)
  },
  {
    path: 'mis-productos',
    loadChildren: () => import('./mis-productos/mis-productos.module').then( m => m.MisProductosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
