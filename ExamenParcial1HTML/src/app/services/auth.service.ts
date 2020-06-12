import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {usuario} from '../compartida/usuario.class';
import * as firebase from 'firebase';
import { AngularFireUploadTask, AngularFireStorage} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged:any=false
  constructor(public afStorage:AngularFireStorage,public afAuth:AngularFireAuth,private firestore: AngularFirestore) {
    afAuth.authState.subscribe(usuario=>(this.isLogged=usuario));
  }
  
  async onRegistrar(usuario:usuario){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(usuario.correo,usuario.password)
      
    }
    catch(error){
      console.log("Ocurrio un error al registrarse",error)
    }
  }
  
  
  async onIniciar(usuario:usuario){
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(usuario.correo,usuario.password)
    } catch (error) {
      console.log("No se logro iniciar sesion", error)
    }

    
  }
  create_student(record,collection) {
    return this.firestore.collection(collection).add(record);
  }
 
  read_students(collection) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  
  update_student(recordID, record, collection) {
    this.firestore.doc(collection + '/' + recordID).update(record);
  }
 
  delete_student(record_id, collection) {
    this.firestore.doc(collection + '/' + record_id).delete();
  }
  
  uploadIMtToStorage(path, information, name): AngularFireUploadTask{
    return this.afStorage.ref(`/${path}/img/${name}`).put(information);
  }

  uploadAUtToStorage(path, information, name): AngularFireUploadTask{
    return this.afStorage.ref(`/${path}/sound/${name}`).put(information);
  }
  storeMetaInfoIm(metainfo,urlim,urlsound, tipo){
    let toSave= {
      urlIm: urlim,
      urlSound: urlsound,
      fullPath: metainfo.fullPath,
      name: metainfo.name
    }
    return this.firestore.collection(tipo).add(toSave);
  }
  deleteStore(file,tipo){
    this.firestore.collection(tipo).doc(file.id).delete();
    this.afStorage.ref(tipo + '/img/' + file.nombre).delete();
    return this.afStorage.ref(tipo + '/sound/' + file.nombre).delete();
  }
  read_Onestudents(collection, id) {
    return this.firestore.collection(collection).doc(id).snapshotChanges();
  }
  }
  