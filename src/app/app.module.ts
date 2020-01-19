import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Registramos el servicio de Productos.
import {ProductosService} from './services/ProductosService';
//Registramos Firebase
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment'
//Definimos todo lo que nos va a hacer falta para la app.
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    //Firebase:
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Parte del registro.
    ProductosService,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
