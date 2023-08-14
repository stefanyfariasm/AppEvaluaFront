import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensacionComponent } from './sensacion.component';

describe('SensacionComponent', () => {
  let component: SensacionComponent;
  let fixture: ComponentFixture<SensacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize variables correctly', () => {
    expect(component.currentImageCuerpo).toBeTruthy();
    expect(component.currentImageCarbonatacion).toBeTruthy();
    expect(component.currentImageCalentamiento).toBeTruthy();
    expect(component.currentImageCremosidad).toBeTruthy();
    expect(component.currentImageAstringencia).toBeTruthy();
    expect(component.seleccionCuerpo).toBe(0);
    expect(component.seleccionCarbonatacion).toBe(0);
    expect(component.seleccionCalentamiento).toBe(0);
    expect(component.seleccionCremosidad).toBe(0);
    expect(component.seleccionAstringencia).toBe(0);
  });

  it('should change currentImageCuerpo and seleccionCuerpo on cambiarImagenCuerpo', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenCuerpo(newImage);
    expect(component.currentImageCuerpo).toBe(newImage);
    expect(component.seleccionCuerpo).toBe(5); 
  });

  it('should change currentImageCarbonatacion and seleccionCarbonatacion on cambiarImagenCarbonatacion', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenCarbonatacion(newImage);
    expect(component.currentImageCarbonatacion).toBe(newImage);
    expect(component.seleccionCarbonatacion).toBe(5); 
  });

  it('should change currentImageCalentamiento and seleccionCalentamiento on cambiarImagenCalentamiento', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenCalentamiento(newImage);
    expect(component.currentImageCalentamiento).toBe(newImage);
    expect(component.seleccionCalentamiento).toBe(5); 
  });

  it('should change currentImageCremosidad and seleccionCremosidad on cambiarImagenCremosidad', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenCremosidad(newImage);
    expect(component.currentImageCremosidad).toBe(newImage);
    expect(component.seleccionCremosidad).toBe(5); 
  });

  it('should change currentImageAstringencia and seleccionAstringencia on cambiarImagenAstringencia', () => {
    const newImage = 'new-image-path.jpg';
    component.cambiarImagenAstringencia(newImage);
    expect(component.currentImageAstringencia).toBe(newImage);
    expect(component.seleccionAstringencia).toBe(5); 
  });

  it('should calculate correct sum of selections', () => {
    component.seleccionCuerpo = 2;
    component.seleccionCarbonatacion = 3;
    component.seleccionCalentamiento = 0;
    component.seleccionCremosidad = 0;
    component.seleccionAstringencia = 0;
    expect(component.sumarSeleccionesSensacion()).toBe('5'); 
  });
});
