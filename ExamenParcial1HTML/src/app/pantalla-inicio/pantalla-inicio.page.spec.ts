import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantallaInicioPage } from './pantalla-inicio.page';

describe('PantallaInicioPage', () => {
  let component: PantallaInicioPage;
  let fixture: ComponentFixture<PantallaInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaInicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
