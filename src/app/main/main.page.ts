import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/UsuariosService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  UserId: String;

  constructor(private _activatedRoute: ActivatedRoute, 
    private _usuariosService: UsuariosService,
    private _router: Router) { }

  ngOnInit() {
    if(this._usuariosService.userDetails()){
      this.UserId = this._usuariosService.userDetails().uid;
      console.log(this.UserId);
    }else{
      this._router.navigate(['login']);
    }
  }

}
