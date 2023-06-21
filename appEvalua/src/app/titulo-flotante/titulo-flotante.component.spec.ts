import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloFlotanteComponent } from './titulo-flotante.component';

describe('TituloFlotanteComponent', () => {
  let component: TituloFlotanteComponent;
  let fixture: ComponentFixture<TituloFlotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloFlotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
