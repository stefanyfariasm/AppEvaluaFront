import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromaComponent } from './aroma.component';

describe('AromaComponent', () => {
  let component: AromaComponent;
  let fixture: ComponentFixture<AromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize variables correctly', () => {
    expect(component.currentImageMalta).toBeTruthy();
    expect(component.currentImageLupulos).toBeTruthy();
    expect(component.currentImageFermen).toBeTruthy();
    expect(component.seleccionMalta).toBe(0);
    expect(component.seleccionLupulos).toBe(0);
    expect(component.seleccionFermen).toBe(0);
    expect(component.valorInapropiadoMalta).toBeFalsy();
    expect(component.valorInapropiadoLupulo).toBeFalsy();
    expect(component.valorInapropiadoFerme).toBeFalsy();
  });

  it('should change currentImageMalta and seleccionMalta on cambiarImagenMalta', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenMalta(newImage);
    expect(component.currentImageMalta).toBe(newImage);
    expect(component.seleccionMalta).toBe(5);
  });

  it('should change currentImageLupulos and seleccionLupulos on cambiarImagenLupulos', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenLupulos(newImage);
    expect(component.currentImageLupulos).toBe(newImage);
    expect(component.seleccionLupulos).toBe(5);
  });

  it('should change currentImageFermen and seleccionFermen on cambiarImagenFermen', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenFermen(newImage);
    expect(component.currentImageFermen).toBe(newImage);
    expect(component.seleccionFermen).toBe(5); 
  });

  it('should update valorInapropiadoMalta on checkboxChangedMalta', () => {
    const event = { target: { checked: true } };
    component.checkboxChangedMalta(event);
    expect(component.valorInapropiadoMalta).toBeTruthy();
  });


  it('should calculate correct sum of selections', () => {
    component.seleccionMalta = 2;
    component.seleccionLupulos = 3;
    component.seleccionFermen = 0;
    expect(component.sumarSeleccionesAroma()).toBe('5');
  });
});
