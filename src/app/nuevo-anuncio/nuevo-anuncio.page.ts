import { Component} from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia, IUsuario } from '../interfaces';
import {ToastController}  from '@ionic/angular'
import { ProductosService } from '../services/ProductosService';
import { UsuariosService } from '../services/UsuariosService';

@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.page.html',
  styleUrls: ['./nuevo-anuncio.page.scss'],
})
export class NuevoAnuncioPage {

  categoria: string;
  img: string = " ";
  id: string;
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

producto: (IProducto | IInmobiliaria | IMotor | ITecnologia);
productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = []
localUsuario: IUsuario;
constructor(private _toastCtrl : ToastController, private _productosService: ProductosService, private _usuariosService: UsuariosService) { }

ngOnInit(){
  let ref = this._productosService.getProductos();
    ref.once("value", snapshot => {
      //snapshot = todos los nodos que encuentre en getProductos
      snapshot.forEach(child => {
        let value = child.val();
        this.productos.push(value);
      })
    });

    
    this.localUsuario = this._usuariosService.getLocalUser();
}
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
       this.producto = {
      "id": " ",
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio,
      "id_usuario": this.localUsuario.id
    }
  }
  else if (this.categoria == "Tecnologia") {
    this.producto = {
      "id": " ",
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio,
      "estado": this.estado,
      "id_usuario": this.localUsuario.id
    }
  }
  else if (this.categoria == "Motor") {
    this.producto = {
      "id": " ",
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio,
      "tipo": this.tipo,
      "km": this.km,
      "id_usuario": this.localUsuario.id
    }
  }
  else if (this.categoria = "Inmobiliaria") {
    this.producto = {
      "id": " ",
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "categoria": this.categoria,
      "precio": this.precio,
      "metros": this.metros,
      "bath": this.bath,
      "habitaciones": this.habitaciones,
      "localidad": this.localidad,
      "id_usuario": this.localUsuario.id
    }
  }

  //this.producto.push()
  this._productosService.setProducto(this.producto);
  this.presentToast();
  
  this.resetForms();
}

resetForms(){
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
