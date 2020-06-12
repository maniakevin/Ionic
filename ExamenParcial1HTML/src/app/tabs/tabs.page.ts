import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'
import {Router,ActivatedRoute} from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { usuario } from '../compartida/usuario.class';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  id: any;
  correo;
  nombre;
  collection= 'usuarios';
  letralista = [];
  user: usuario=new usuario();
  cUid;
  nombrehd;
  apellidohd;
  generohd;
  constructor(public navCtrl: NavController,private firebaseService: FirebaseService,private authSvc:AuthService,private router:Router, private afAuth:AngularFireAuth,public navController:NavController,public route: ActivatedRoute) { 
    
    const email = this.route.snapshot.paramMap.get('correo');
    //var res = email.split('@', 1)
    //this.correo = res;
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

      }
      
      localStorage.setItem('nombre', JSON.stringify(this.user.nombre))
      
    this.user.nombre = localStorage.getItem('nombre')
    this.user.nombre = this.user.nombre.replace('"', '');
      this.user.nombre = this.user.nombre.replace('"', '');
      
  })
  }
  async onIniciar(){
  }
  onSalir(){
    this.afAuth.auth.signOut();
    console.log("Cerro sesion")
    localStorage.removeItem('cUId');
    localStorage.removeItem('user')
    localStorage.removeItem('nombre')
    this.router.navigateByUrl('/home')
  }
  EditarUsuario(){
    this.router.navigateByUrl('/pantalla-editar-usuario')
  }
};

