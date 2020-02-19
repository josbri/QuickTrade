import { Injectable } from '@angular/core'
import { IUsuario } from '../interfaces';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import * as firebase from 'firebase/app';

@Injectable()

export class UsuariosService {
  usuario: IUsuario;
  usuarios: IUsuario[] = [];
  localUser: IUsuario;
  
  constructor(private _db: AngularFireDatabase) {
  }

  /***Ejercicio 1 */

  saveUserSearch(userId: string, busqueda: string){
    let ref = this._db.database.ref("busquedas").child(userId).push(busqueda);
  }

  /***Fin ejercicio 1 */
  getUsuarios() {
      let ref= this._db.database.ref("usuarios");
      return ref;
      // ref.once("value"), snapshot => {
      //   snapshot.forEach(child =>{
      //     let value = child.val();
      //     let key = child.key;
      //     this.usuarios.push(value);
      //   } )
      // }
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }


  userDetails() {
    return firebase.auth().currentUser;
  }






  /*setLocalUser(usuarioId:string){
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
  }*/
}