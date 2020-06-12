import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../services/auth.service'
import {usuario} from '../compartida/usuario.class'
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: usuario=new usuario();
  constructor(private authSvc:AuthService, private router: Router, public navCtrl: NavController) {}
  
  async onIniciar(){
    const resultado = await this.authSvc.onIniciar(this.user);

    if(resultado){
      console.log("Sesion Iniciada correctamente")
      localStorage.setItem('user', JSON.stringify(resultado.user.email))
      localStorage.setItem('cUId', JSON.stringify(resultado.user.uid))
      this.navCtrl.navigateForward('/tabs')
      
    }
  }
}
