import { Component } from '@angular/core';
import { Router } from '@angular/router'
import {ToastController}  from '@ionic/angular'
import { UsuariosService } from '../services/UsuariosService';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(private _toastCtrl : ToastController, 
    private _router: Router, 
    private _usuariosService: UsuariosService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Introduce un email válido' },
      { type: 'pattern', message: 'Por favor, introduce un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Introduce un password válido' },
      { type: 'minlength', message: 'El password debe ser al menos de 5 caracteres' }
    ]
  };
 
 
  loginUser(value){
    this._usuariosService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this._router.navigate(['main']);
    }, err => {
      this.errorMessage = err.message;
    })
  }
 
  /*
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
  }*/

}
