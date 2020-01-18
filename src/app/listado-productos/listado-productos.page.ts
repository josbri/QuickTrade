import { Component, OnInit } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ProductosService } from '../services/ProductosService';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.page.html',
  styleUrls: ['./listado-productos.page.scss'],
})
export class ListadoProductosPage implements OnInit {

  

productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[];

//Inyectamos el servicio de productos.
  constructor(private _productosService: ProductosService) {
   }

  ngOnInit() {
    this.productos = this._productosService.getProductos();
  }
}
