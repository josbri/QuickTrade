import { Component, OnInit } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from 'src/app/interfaces';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/ProductosService';

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.page.html',
  styleUrls: ['./detalles-productos.page.scss'],
})
export class DetallesProductosPage implements OnInit {
  
  producto: (IProducto | IInmobiliaria | IMotor | ITecnologia);
  id: number;

  constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductosService) { }
  
  ngOnInit() {
    //Le ponemos un + delante para convertirlo a number.
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');  

    this.producto = this._productosService.getProducto(this.id);
  }

}
