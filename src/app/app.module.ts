import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Registramos el servicio de Productos y Usuarios
import {ProductosService} from './services/ProductosService';
import { UsuariosService } from './services/UsuariosService';
//Registramos el componente de Editar

import { ModalEditarComponent } from './modal-editar/modal-editar.component'
//Registramos Firebase
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment'

import { FormsModule } from '@angular/forms';
import { EditarModalPage } from './editar-modal/editar-modal.page';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Definimos todo lo que nos va a hacer falta para la app.
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    //Firebase:
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Parte del registro.
    ProductosService,
    UsuariosService,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
