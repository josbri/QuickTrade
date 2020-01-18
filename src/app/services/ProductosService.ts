import {Injectable} from '@angular/core'
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';

@Injectable()


export class ProductosService{

    productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [
        {
          id: 1,
          nombre: "El Laptop",
          descripcion: "Un nuevo laptop, muy potente.",
          categoria: "Tecnologia",
          precio: 1300,
          estado: "Perfecto",
        },
        {
          id: 2,
          nombre: "Batidora",
          descripcion: " Batidora potente.",
          categoria: "Hogar",
          precio: 20,
        },
        {
          id: 3,
          nombre: "Audi ",
          descripcion: " Audi a25, 300000. Solo usado en campo.",
          categoria: "Motor",
          precio: 30000,
          tipo: "Coche",
          km: 300000
        },
        {
          id: 4,
          nombre: "Movil",
          descripcion: " XIamoi",
          categoria: "Tecnologia",
          precio: 500,
          estado: "Usado"
        }
        ]

        
    getProductos(): (IProducto | IInmobiliaria | IMotor | ITecnologia)[]{
        return this.productos;
    }

    getProducto(id:number) : (IProducto | IInmobiliaria | IMotor | ITecnologia){
      return this.productos.find( producto => producto.id == id);
    }

}
