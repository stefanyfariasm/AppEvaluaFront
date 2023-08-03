import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosComponent } from './estilos.component';

describe('EstilosComponent', () => {
  let component: EstilosComponent;
  let fixture: ComponentFixture<EstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Revisar titulo`, () => {
    
    const check = component.verificarTitulo
    expect(check).toBeTrue()
  })

  it(`Revisar Imformacion`, () => {
    
    const check = component.verificarInformacion
    expect(check).toBeTrue()
  })


});
