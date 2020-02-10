import { Component} from '@angular/core';
import { IInmobiliaria, IMotor, ITecnologia, IProducto } from '../interfaces';
import { NavParams, ToastController, ModalController } from '@ionic/angular';
import { ProductosService } from '../services/ProductosService';

@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.page.html',
  styleUrls: ['./editar-modal.page.scss'],
})
export class EditarModalPage {

  producto: (IProducto | IInmobiliaria | IMotor | ITecnologia);
  productoInmobiliaria: IInmobiliaria;
  productoMotor: IMotor;
  productoTecnologia: ITecnologia;
  productoHogar: IProducto;
  categoria: string;

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
  userid: string;


productoId : string;
  constructor(public modalController: ModalController, private navParams: NavParams, private _toastCtrl : ToastController, private _productosService: ProductosService) { }

  ngOnInit() {
    this.categoria = this.navParams.get('categoria');

    if (this.categoria == "Hogar") {
    this.productoHogar = this.navParams.get('producto');
      if (this.productoHogar != null){
        this.id=this.productoHogar.id;
        this.nombre= this.productoHogar.nombre;
        this.descripcion = this.productoHogar.descripcion;
        this.precio = this.productoHogar.precio;
        this.userid = this.productoHogar.userId;
      }
    }
    else if (this.categoria == "Tecnologia") {
      this.productoTecnologia = this.navParams.get('producto');
      if (this.productoTecnologia != null){
        this.id=this.productoTecnologia.id;
        this.nombre= this.productoTecnologia.nombre;
        this.descripcion = this.productoTecnologia.descripcion;
        this.precio = this.productoTecnologia.precio;
        this.userid = this.productoTecnologia.userId;
        this.estado = this.productoTecnologia.estado;
      }
    }
    else if (this.categoria == "Motor") {
      this.productoMotor = this.navParams.get('producto');
      if (this.productoMotor != null){
        this.id=this.productoMotor.id;
        this.nombre= this.productoMotor.nombre;
        this.descripcion = this.productoMotor.descripcion;
        this.precio = this.productoMotor.precio;
        this.userid = this.productoMotor.userId;
        this.km = this.productoMotor.km;
        this.date = this.productoMotor.date;
        this.tipo = this.productoMotor.tipo;
      }
    }
    else if (this.categoria = "Inmobiliaria") {
      this.productoInmobiliaria = this.navParams.get('producto');
      if (this.productoInmobiliaria != null){
        this.id=this.productoInmobiliaria.id;
        this.nombre= this.productoInmobiliaria.nombre;
        this.descripcion = this.productoInmobiliaria.descripcion;
        this.precio = this.productoInmobiliaria.precio;
        this.userid = this.productoInmobiliaria.userId;
        this.bath = this.productoInmobiliaria.bath;
        this.habitaciones = this.productoInmobiliaria.habitaciones;
        this.localidad = this.productoInmobiliaria.localidad;
        this.metros = this.productoInmobiliaria.metros;
      }
    }
  }
  
  async presentToast(){
    const toast = await this._toastCtrl.create({
      message: 'El producto ' + this.nombre + ' se ha actualizado correctamente',
      duration: 2000,
      position: 'bottom',
    })
    toast.present();
  }
  
  insertar(){
    
    if (this.categoria == "Hogar") {
         this.producto = {
        "id": this.id,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "userId": this.userid
      }
    }
    else if (this.categoria == "Tecnologia") {
      this.producto = {
        "id": this.id,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "estado": this.estado,
        "userId": this.userid
      }
    }
    else if (this.categoria == "Motor") {
      this.producto = {
        "id": this.id,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "tipo": this.tipo,
        "km": this.km,
        "userId": this.userid
      }
    }
    else if (this.categoria = "Inmobiliaria") {
      this.producto = {
        "id": this.id,
        "nombre": this.nombre,
        "descripcion": this.descripcion,
        "categoria": this.categoria,
        "precio": this.precio,
        "metros": this.metros,
        "bath": this.bath,
        "habitaciones": this.habitaciones,
        "localidad": this.localidad,
        "userId": this.userid
      }
    }
    //this.producto.push()
    this._productosService.updateProducto(this.producto);
    this.presentToast();
    this.dismiss();
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
