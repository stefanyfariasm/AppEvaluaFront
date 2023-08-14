import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborComponent } from './sabor.component';

describe('SaborComponent', () => {
  let component: SaborComponent;
  let fixture: ComponentFixture<SaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize variables correctly', () => {
    expect(component.currentImageAmargor).toBeTruthy();
    expect(component.currentImageEquilibrio).toBeTruthy();
    expect(component.currentImageRetrogusto).toBeTruthy();
    expect(component.currentImageMalta).toBeTruthy();
    expect(component.currentImageLupulos).toBeTruthy();
    expect(component.currentImageFermen).toBeTruthy();
    expect(component.seleccionAmargor).toBe(0);
    expect(component.seleccionEquilibrio).toBe(0);
    expect(component.seleccionRetrogusto).toBe(0);
    expect(component.seleccionMalta).toBe(0);
    expect(component.seleccionLupulos).toBe(0);
    expect(component.seleccionFermen).toBe(0);
  });

  it('should change currentImageAmargor and seleccionAmargor on cambiarImagenAmargor', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenAmargor(newImage);
    expect(component.currentImageAmargor).toBe(newImage);
    expect(component.seleccionAmargor).toBe(5);
  });

  it('should change currentImageEquilibrio and seleccionEquilibrio on cambiarImagenEquilibrio', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenEquilibrio(newImage);
    expect(component.currentImageEquilibrio).toBe(newImage);
    expect(component.seleccionEquilibrio).toBe(5); 
  });

  it('should change currentImageRetrogusto and seleccionRetrogusto on cambiarImagenRetrogusto', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenRetrogusto(newImage);
    expect(component.currentImageRetrogusto).toBe(newImage);
    expect(component.seleccionRetrogusto).toBe(5); 
  });

  it('should change currentImageMalta and seleccionMalta on cambiarImagenMalta', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenMalta(newImage);
    expect(component.currentImageMalta).toBe(newImage);
    expect(component.seleccionMalta).toBe(5); 
  });

  it('should update currentImageLupulos and seleccionLupulos on cambiarImagenLupulos', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenLupulos(newImage);
    expect(component.currentImageLupulos).toBe(newImage);
    expect(component.seleccionLupulos).toBe(5); 
  });

  it('should update currentImageFermen and seleccionFermen on cambiarImagenFermen', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenFermen(newImage);
    expect(component.currentImageFermen).toBe(newImage);
    expect(component.seleccionFermen).toBe(5); 
  });

  it('should calculate correct sum of selections', () => {
    component.seleccionAmargor = 1;
    component.seleccionEquilibrio = 1;
    component.seleccionRetrogusto = 1;
    component.seleccionMalta = 1;
    component.seleccionLupulos = 0;
    component.seleccionFermen = 1;
    expect(component.sumarSeleccionesSabor()).toBe('5'); 
  });
});
