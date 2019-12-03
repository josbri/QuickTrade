import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categoria : string = " ";
  
  constructor() { }

  //Le pasamos el $Event, y de ahí leemos el detail.value,
  //que es el valor del evento al que se ha cambiado.
  changeSelected(selectedValue : any){
    this.categoria = selectedValue.detail.value;
  }
}
