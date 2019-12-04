import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categoria : string = " ";
  img : string= " ";
  
  constructor() { }

  //Le pasamos el $Event, y de ahí leemos el detail.value,
  //que es el valor del evento al que se ha cambiado.
  //Cambiamos la imagen también.
  changeSelected(selectedValue : any){
    this.categoria = selectedValue.detail.value;
    if (this.categoria == "Hogar"){
      this.img = "home";
    } 
    else if (this.categoria == "Tecnologia"){
      this.img = "laptop";
    }
    else if (this.categoria == "Motor"){
      this.img = "car";
    }
    else if (this.categoria = "Inmobiliaria"){
      this.img = "business";
    }
  }
}
