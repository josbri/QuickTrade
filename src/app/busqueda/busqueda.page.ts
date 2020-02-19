import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/ProductosService';
import { ActivatedRoute } from '@angular/router';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  
  busquedaString: string;
  userId: string;
  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[]=[];

  constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductosService) { }

  ngOnInit() {
    this.userId = this._activatedRoute.snapshot.paramMap.get('UserId'); 
    console.log("USER ID BUSQUEDA: " + this.userId)
  }

  buscar(){
    if(this.busquedaString != ""){
      console.log("busquedaString: " + this.busquedaString)
      var ref = this._productosService.getProductosByNombre(this.busquedaString);
      ref.once("value", snapshot => {
      //snapshot = todos los nodos que encuentre en getProductos
      snapshot.forEach(child => {
        let value = child.val();
        this.productos.push(value);
      })
    })
    }
    console.log(this.productos)

  }
}
