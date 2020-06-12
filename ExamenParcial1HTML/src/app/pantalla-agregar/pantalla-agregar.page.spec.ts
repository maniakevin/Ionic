import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantallaAgregarPage } from './pantalla-agregar.page';

describe('PantallaAgregarPage', () => {
  let component: PantallaAgregarPage;
  let fixture: ComponentFixture<PantallaAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
