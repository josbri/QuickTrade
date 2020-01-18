import { Component} from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import {ToastController}  from '@ionic/angular'

@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.page.html',
  styleUrls: ['./nuevo-anuncio.page.scss'],
})
export class NuevoAnuncioPage {

  categoria: string = " ";
  img: string = " ";
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  metros: number;
  bath: number;
  habitaciones: number;
  localidad: string;
  tipo: string;
  km: number;
  date: Date;
  estado: string;


productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = []

constructor(private _toastCtrl : ToastController) { }

async presentToast(){
  const toast = await this._toastCtrl.create({
    message: 'El producto ' + this.nombre + ' se ha añadido correctamente',
    duration: 2000,
    position: 'bottom',
  })
  toast.present();
}

insertar(){
  if (this.categoria == "Hogar") {
    this.productos.push({
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio
    })
  }
  else if (this.categoria == "Tecnologia") {
    this.productos.push({
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio,
      "estado": this.estado,
    })
  }
  else if (this.categoria == "Motor") {
    this.productos.push({
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio,
      "tipo": this.tipo,
      "km": this.km,
    })
  }
  else if (this.categoria = "Inmobiliaria") {
    this.productos.push({
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio,
      "metros": this.metros,
      "bath": this.bath,
      "habitaciones": this.habitaciones,
      "localidad": this.localidad,
    })
  }

  this.presentToast();
  
  this.precio = null; 
  this.nombre= " ";
  this.descripcion= " ";
  this.precio= null;
  this.metros= null;
  this.bath= null;
  this.habitaciones= null;
  this.localidad= " ";
  this.tipo= " ";
  this.km = null;
  this.estado= " ";


}
//Cambiamos la imagen.
changeImage(){
  if (this.categoria == "Hogar") {
    this.img = "home";
  }
  else if (this.categoria == "Tecnologia") {
    this.img = "laptop";
  }
  else if (this.categoria == "Motor") {
    this.img = "car";
  }
  else if (this.categoria = "Inmobiliaria") {
    this.img = "business";
  }
}
}
