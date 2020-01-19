import {Injectable} from '@angular/core'
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()


export class ProductosService{
  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[]=[];
  producto: (IProducto | IInmobiliaria | IMotor | ITecnologia);
  constructor(private _db: AngularFireDatabase){
      
  }

  setProducto(producto: (IProducto | IInmobiliaria | IMotor | ITecnologia)){
    let ref= this._db.database.ref("productos");
    //Introducimos el objeto vacio  para ver la key.
    let newRef = ref.push();
    //La asignamos al id:
    producto.id = newRef.key;
    //Guardamos en el server.
    newRef.set(producto);
  }

  getProductos(){
    let ref= this._db.database.ref("productos");
    return ref;
  }

  getProductoById(id){
    let ref= this._db.database.ref("productos").orderByChild('id').equalTo(id);
    return ref;
  }
 
}
