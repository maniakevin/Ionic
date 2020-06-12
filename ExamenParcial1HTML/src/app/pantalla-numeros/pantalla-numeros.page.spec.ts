import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantallaNumerosPage } from './pantalla-numeros.page';

describe('PantallaNumerosPage', () => {
  let component: PantallaNumerosPage;
  let fixture: ComponentFixture<PantallaNumerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaNumerosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaNumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
