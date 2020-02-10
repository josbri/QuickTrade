import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/UsuariosService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  UserId: String;

  constructor(private _activatedRoute: ActivatedRoute, private _usuariosService: UsuariosService) { }

  ngOnInit() {
    this.UserId = this._activatedRoute.snapshot.paramMap.get('UserId'); 
  }

}
