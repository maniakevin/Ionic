import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-agregar',
  templateUrl: './pantalla-agregar.page.html',
  styleUrls: ['./pantalla-agregar.page.scss'],
})
export class PantallaAgregarPage implements OnInit {
  SelectedImage;
  SelectedSound;
  constructor(private router:Router) { }

  ngOnInit() {
    
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

  Volver(){
    this.router.navigateByUrl('/tabs')
  }
  
}
