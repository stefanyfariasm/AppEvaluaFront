import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparienciaComponent } from './apariencia.component';

describe('AparienciaComponent', () => {
  let component: AparienciaComponent;
  let fixture: ComponentFixture<AparienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize variables correctly', () => {
    expect(component.currentImageClaridad).toBeTruthy();
    expect(component.currentImageFormacion).toBeTruthy();
    expect(component.currentImageRetencion).toBeTruthy();
    expect(component.currentImageColor).toBeTruthy();
    expect(component.currentImageColorEspuma).toBeTruthy();
    expect(component.seleccionClaridad).toBe(0);
    expect(component.seleccionFormacion).toBe(0);
    expect(component.seleccionRetencion).toBe(0);
    expect(component.seleccionColor).toBe(0);
    expect(component.seleccionColorEspuma).toBe(0);
  });

  it('should change currentImageClaridad and seleccionClaridad on cambiarImagenClaridad', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenClaridad(newImage);
    expect(component.currentImageClaridad).toBe(newImage);
    expect(component.seleccionClaridad).toBe(5); 
  });

  it('should change currentImageFormacion and seleccionFormacion on cambiarImagenFormacion', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenFormacion(newImage);
    expect(component.currentImageFormacion).toBe(newImage);
    expect(component.seleccionFormacion).toBe(5); 
  });

  it('should change currentImageRetencion and seleccionRetencion on cambiarImagenRetencion', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenRetencion(newImage);
    expect(component.currentImageRetencion).toBe(newImage);
    expect(component.seleccionRetencion).toBe(5); 
  });

  it('should change currentImageColor and seleccionColor on cambiarImagenColor', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenColor(newImage);
    expect(component.currentImageColor).toBe(newImage);
  });

  it('should change currentImageColorEspuma and seleccionColorEspuma on cambiarImagenColorEspuma', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenColorEspuma(newImage);
    expect(component.currentImageColorEspuma).toBe(newImage);
  });

  it('should calculate correct sum of selections', () => {
    component.seleccionClaridad = 2;
    component.seleccionFormacion = 3;
    component.seleccionRetencion = 1;
    component.seleccionColor = 0;
    component.seleccionColorEspuma = 2;
    expect(component.sumarSeleccionesApariencia()).toBe('5');
  });
});
