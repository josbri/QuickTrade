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

    setLocalUser(usuarioId:string){
        let ref= this._db.database.ref("usuarios");
        ref.orderByChild('key').equalTo('usuarioId').once("value", snapshot =>{
        snapshot.forEach(child =>{
            this.localUser = child.val();
        })
        })
    }

    getLocalUser(){
        return this.usuario;
    }

    getLocalUserId(){
        return this.usuario.id;
    }

    getUsuarios(){
        let ref= this._db.database.ref("usuarios");
        return ref;
    }

    getUsuariosByEmail(email){
        let ref = this._db.database.ref("usuarios").orderByChild('Email').equalTo(email);
        ref.once("value", snapshot => {
            this.setLocalUser(snapshot.val());
        return ref;
        });
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