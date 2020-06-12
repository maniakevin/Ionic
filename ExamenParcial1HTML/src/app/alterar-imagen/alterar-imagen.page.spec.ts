import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterarImagenPage } from './alterar-imagen.page';

describe('AlterarImagenPage', () => {
  let component: AlterarImagenPage;
  let fixture: ComponentFixture<AlterarImagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarImagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterarImagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
