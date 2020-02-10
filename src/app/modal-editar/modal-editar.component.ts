import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IInmobiliaria, IMotor, ITecnologia, IProducto } from '../interfaces';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss'],
})
export class ModalEditarComponent implements OnInit {

  productoInmobiliaria: IInmobiliaria;
  productoMotor: IMotor;
  productoTecnologia: ITecnologia;
  productoHogar: IProducto;
  categoria: String;

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



productoId : string;
  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.categoria = this.navParams.get('categoria');

    if (this.categoria == "Hogar") {
    this.productoHogar = this.navParams.get('producto') 
    }
    else if (this.categoria == "Tecnologia") {
      this.productoTecnologia = this.navParams.get('producto') 
    }
    else if (this.categoria == "Motor") {
      this.productoMotor = this.navParams.get('producto') 
    }
    else if (this.categoria = "Inmobiliaria") {
      this.productoInmobiliaria = this.navParams.get('producto') 
    }
  }

}
