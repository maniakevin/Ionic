import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { usuario } from '../compartida/usuario.class';
import { NativeAudio } from '@ionic-native/native-audio';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { NavController, AlertController } from '@ionic/angular';
import { snapshotToArray } from '../../environments/environment'
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.page.html',
  styleUrls: ['./formulario-registro.page.scss'],
})
export class FormularioRegistroPage implements OnInit {
  user: usuario = new usuario();
  items = [];
  ref = firebase.database().ref('items/')
  inputText: string = '';
  collection = 'usuarios';
  cUid;
  constructor(private firebaseService: FirebaseService, public navCtrl: NavController, private alertController: AlertController, private formBuilder: FormBuilder, private authSvc: AuthService, private router: Router, private alertCom: AlertController) {
    /*this.todo = this.formBuilder.group({
      correohd: ['', Validators.required],
      nombrehd: [''],
      apellidohd: [''],
      sexohd: [''],
      passwordhd: [''],
    });*/
    this.ref.on('value', resp => {
      this.items = snapshotToArray(resp);
    })
  }
  logForm(form) {
    console.log(form.value)
  }
  ngOnInit() {


  }

  async onRegistrar() {
    try {
      
      const user = await this.authSvc.onRegistrar(this.user)
      localStorage.setItem('user', JSON.stringify(user.user.email))
      localStorage.setItem('cUId', JSON.stringify(user.user.uid)) 
      if (user) {
        const alert = await this.alertCom.create({
          header: 'Alert',
          subHeader: '',
          message: 'Usuario Registrado Correctamente',
          buttons: ['OK']
        })
        
        this.onGuardar();
        await alert.present();

      }

    }
    catch (error) {
      console.log("Error al dar de alta usuario", error)
    }

  }
  onGuardar() {
    this.cUid = localStorage.getItem('cUId');
    this.cUid = this.cUid.replace('"', '');
    this.cUid = this.cUid.replace('"', '');
    let record = {};
    record['nombre'] = '------';
    record['apellido'] = '------';
    record['genero'] = '------';

    try {
      this.firebaseService.update_studenthd(this.cUid, record, this.collection);
      this.router.navigateByUrl('/tabs');
    } catch (e) {
      console.log(e);
    }
  }
  Actualizar() {

  }

}



