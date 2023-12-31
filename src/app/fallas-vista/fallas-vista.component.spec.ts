import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallasVistaComponent } from './fallas-vista.component';

describe('FallasVistaComponent', () => {
  let component: FallasVistaComponent;
  let fixture: ComponentFixture<FallasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallasVistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call console.log for each card', () => {
    const spy = spyOn(console, 'log');
    component.guardarDatos();
    expect(spy).toHaveBeenCalledTimes(component.matriz.flat().length);
  });

  it('should call guardarDatos', () => {
    const spy = spyOn(console, 'log');
    component.guardarDatos();
    expect(spy).toHaveBeenCalled();
  });
});
