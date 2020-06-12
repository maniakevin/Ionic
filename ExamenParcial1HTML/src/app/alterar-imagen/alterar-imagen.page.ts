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
  selector: 'app-alterar-imagen',
  templateUrl: './alterar-imagen.page.html',
  styleUrls: ['./alterar-imagen.page.scss'],
})
export class AlterarImagenPage implements OnInit {
  CUObject = 'test';
  SelectedSound;
  SelectedImage;
  nombre;
  seleccionado= '';
  Accion='Agregar';
  constructor(private activRoute: ActivatedRoute, private dbFire: AuthService, private router: Router) { }

  ngOnInit() {
    this.CUObject = this.activRoute.snapshot.paramMap.get('id');
    let editor = this.activRoute.snapshot.paramMap.get('modificacion')
    if (editor == 0 as unknown){

    }else{
      this.Accion = 'Editar';
      this.seleccionado = editor;
      this.cargarInfoEdit();
    }

  }
  onImageSelected(event) {
    if (event.target.files.length > 0) {
      this.SelectedImage = event.target.files[0];
    }
  }

  onSoundSelected(event) {
    if (event.target.files.length > 0) {
      this.SelectedSound = event.target.files[0];
    }
  }
async onGuardar(){
  let path;
  if (this.CUObject === 'letra'){
    path = 'filesAn';
  } else {
    path = 'filesRef'
  }
  if(this.seleccionado !== ''){
    await this.dbFire.delete_student(this.seleccionado,path);
  }
  let urlimagen;
    let subirIm = this.dbFire.uploadIMtToStorage(path, this.SelectedImage, this.nombre);
    await subirIm.then(res => {
      res.ref.getDownloadURL().then(url => {
        urlimagen=url;
      });
    });
    let subirAu = this.dbFire.uploadAUtToStorage(path, this.SelectedSound, this.nombre);
    await subirAu.then(res => {
      res.ref.getDownloadURL().then(url => {
        this.dbFire.storeMetaInfoIm(res.metadata,urlimagen,url, path).then(() => {

     });
     });
    });
    this.router.navigateByUrl('/tabs/pantalla-inicio')
    console.log('Si se subio we')
}
cargarInfoEdit(){
  let path;
  if (this.CUObject === 'letra'){
    path = 'filesAn';
  } else {
    path = 'filesRef'
  }
  this.dbFire.read_Onestudents(path, this.seleccionado).subscribe((data) => {
    this.nombre = data.payload.data()['name'];
  })
}

}
