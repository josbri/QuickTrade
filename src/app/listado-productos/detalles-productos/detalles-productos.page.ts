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
  
  producto: (IProducto | IInmobiliaria | IMotor | ITecnologia) = null;
  id: string;

  ngOnInit() {
    //Le ponemos un + delante para convertirlo a number.
    this.id = this._activatedRoute.snapshot.paramMap.get('id');  
    
    var ref = this._productosService.getProductoById(this.id);
    ref.once('value', data => {
      data.forEach( item => {
        this.producto = item.val();
      })
    })
  }
  constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductosService) { }
  
 

}
