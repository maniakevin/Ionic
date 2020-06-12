import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { usuario } from '../compartida/usuario.class';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { element } from 'protractor';
@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.page.html',
  styleUrls: ['./pantalla-inicio.page.scss'],
})
export class PantallaInicioPage implements OnInit {
  collection = 'usuarios';
  letralista = [];
  user: usuario = new usuario();
  cUid;
  nombrehd;
  apellidohd;
  generohd;
  imagen;
  sonido;
  reproducirSonido(letra){
    let sonido = new Audio();
    sonido.src = letra;
    sonido.load();
    sonido.play();
  }
  constructor(public firebaseService: FirebaseService, private router: Router, private afAuth: AngularFireAuth,public auth:AuthService) { }

  ngOnInit() {
    this.cUid = localStorage.getItem('cUId');
    this.cUid = this.cUid.replace('"', '');
    this.cUid = this.cUid.replace('"', '');
    this.firebaseService.read_Onestudents(this.collection, this.cUid).subscribe((data) => {
      if (data.payload.get('nombre') !== undefined) {
        this.user.nombre = data.payload.data()['nombre'];
      }
      this.loadalgo()
      
    })
  }
  loadalgo() {
    this.firebaseService.read_students('filesAn').subscribe((data) => {
      this.letralista = data.map(e => {
        
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()['name'],
          imagen: e.payload.doc.data()['urlIm'],
          sonido: e.payload.doc.data()['urlSound'],
        }
      })
    })
  }
  onMouseEntrar(element) {
    this.letralista.map(function (dato) {
      if (dato === element) {
        dato.oculto = true;
      }
    })
  }
  onMouseSalio(element) {
    this.letralista.map(function (dato) {
      if (dato === element) {
        dato.oculto = false;
      }
    })
  }
  onEliminar(objeto) {
    this.auth.deleteStore(objeto, 'filesAn')
  }
  onSalir() {
    this.afAuth.auth.signOut();
    console.log("Cerro sesion")
    this.router.navigateByUrl('/home')
  }
  AgregarImagen() {
    this.router.navigateByUrl('/alterar-imagen/letras/')
  }
}
