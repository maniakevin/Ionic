import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { usuario } from '../compartida/usuario.class';
import { NativeAudio } from '@ionic-native/native-audio';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import * as firebase from 'firebase';
import { NavController, AlertController } from '@ionic/angular';
import { snapshotToArray } from '../../environments/environment'

@Component({
  selector: 'app-pantalla-editar-usuario',
  templateUrl: './pantalla-editar-usuario.page.html',
  styleUrls: ['./pantalla-editar-usuario.page.scss'],
})
export class PantallaEditarUsuarioPage implements OnInit {
  collection= 'usuarios';
  letralista = [];
  user: usuario=new usuario();
  studentForm: FormGroup;
  cUid;
  nombrehd;
  apellidohd;
  generohd;
  constructor(
    private router:Router,
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
  }
  
  ngOnInit() {
    this.cUid = localStorage.getItem('cUId');
    this.cUid = this.cUid.replace('"', '');
    this.cUid = this.cUid.replace('"', '');
    let correo = localStorage.getItem('user');
    correo = correo.replace('"', '');
    correo = correo.replace('"', '');
    this.firebaseService.read_Onestudents(this.collection, this.cUid).subscribe((data) => {
      if (data.payload.get('nombre') !== undefined) {
        this.user.nombre = data.payload.data()['nombre'];
        this.user.apellido = data.payload.data()['apellido'];
        this.user.genero = data.payload.data()['genero'];

      }
      console.log()
      this.user.correo = correo;
      
  })
}
  Volver(){
    this.router.navigateByUrl('/tabs')
  }
  
  Actualizar() {
    let data = {};
    data['nombre'] = this.user.nombre;
    data['apellido'] = this.user.apellido;
    data['genero'] = this.user.genero;
    try{
      this.firebaseService.update_student(this.collection,this.cUid, data);
      this.router.navigateByUrl('/tabs/pantalla-inicio')
    }  catch(e){
      console.log(e)
    }
  }

}
