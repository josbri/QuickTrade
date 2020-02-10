import { Component } from '@angular/core';
import { Router } from '@angular/router'
import {ToastController}  from '@ionic/angular'
import { UsuariosService } from '../services/UsuariosService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  Email: string ;
  Pass:  string;
  UserId: string;

  constructor(private _toastCtrl : ToastController, private _router: Router, private _usuariosService: UsuariosService) { }

  ngOnInit() {
    
  }
  async presentToast(text){
    const toast = await this._toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom',
    })
    toast.present();
  }

  validateLogin(){
    if (!this.Email || !this.Pass){
       this.presentToast("Uno de los campos está vacio.");
    }
    else{
      this.UserId = "4UOJ67L02JagVu7chsa3u8gZcnD3";
      //this._usuariosService.setLocalUser(this.UserId);
     this._router.navigate(['main', this.UserId]);
    } 
  }

}
