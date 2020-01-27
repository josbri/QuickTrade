import {Injectable} from '@angular/core'
import { IUsuario} from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class UsuariosService {
    usuario: IUsuario;
    usuarios: IUsuario [] = [];
    localUser: IUsuario;

    constructor(private _db: AngularFireDatabase){
      
    }

    setLocalUser(usuario: IUsuario){
        this.localUser = usuario;
    }

    getLocalUser(){
        return this.localUser;
    }


    getUsuarios(){
        let ref= this._db.database.ref("usuarios");
        return ref;
    }

    setProducto(usuario: IUsuario){
        let ref= this._db.database.ref("usuarios");
        //Introducimos el objeto vacio  para ver la key.
        let newRef = ref.push();
        //La asignamos al id:
        usuario.id = newRef.key;
        //Guardamos en el server.
        newRef.set(usuario);
    }
}