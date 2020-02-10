import { Component, OnInit } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ProductosService } from '../services/ProductosService';
//import { ModalEditarComponent } from '../modal-editar/modal-editar.component'
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditarModalPage } from '../editar-modal/editar-modal.page';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[]=[];
  userId: string;
//Inyectamos el servicio de productos.
  constructor(public modalController: ModalController, private _productosService: ProductosService, private _activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.productos = [];
    this.userId = this._activatedRoute.snapshot.paramMap.get('UserId'); 
    let ref = this._productosService.getProductos().orderByChild('userId').equalTo(this.userId);
    ref.once("value", snapshot => {
      //snapshot = todos los nodos que encuentre en getProductos
      snapshot.forEach(child => {
        let value = child.val();
        this.productos.push(value);
      })
    })
  }

  deleteProducto(Id: string){
    this._productosService.deleteProducto(Id);
    this.productos =  this.productos.filter(function( obj ) {
      return obj.id !== Id;
    });
  }

  async showModal(producto, categoria){
    const modal = await this.modalController.create({
      component: EditarModalPage,
      componentProps: {
        'producto': producto,
        'categoria': categoria,
      },
    });
    modal.onDidDismiss()
    .then(() => {
      this.getData();
    });

    return await modal.present();
  }
}
