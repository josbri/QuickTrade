import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../services/UsuariosService';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
 
  validation_messages = {
   'email': [
     { type: 'required', message: 'Introduce un email.' },
     { type: 'pattern', message: 'El email no es válido.' }
   ],
   'password': [
     { type: 'required', message: 'Introduce un password.' },
     { type: 'minlength', message: 'El password debe ser al menos 5 caracteres.' }
   ]
 };
  
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
  tryRegister(value){
    this._usuariosService.registerUser(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Se ha creado tu cuenta. Por favor, haz login.";
       setTimeout(() => this.goToLoginPage(), 2000);
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }

  goToLoginPage(){
    this._router.navigate(['login']);
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

  validateRegistro(){
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
