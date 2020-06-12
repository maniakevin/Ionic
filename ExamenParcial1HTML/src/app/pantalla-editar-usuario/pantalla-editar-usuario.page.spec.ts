import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantallaEditarUsuarioPage } from './pantalla-editar-usuario.page';

describe('PantallaEditarUsuarioPage', () => {
  let component: PantallaEditarUsuarioPage;
  let fixture: ComponentFixture<PantallaEditarUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaEditarUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaEditarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
