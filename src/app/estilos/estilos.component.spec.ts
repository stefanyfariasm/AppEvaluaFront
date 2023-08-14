import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstilosComponent } from './estilos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('EstilosComponent', () => {
  let component: EstilosComponent;
  let fixture: ComponentFixture<EstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosComponent ],
      imports: [HttpClientTestingModule],
      providers: [SharedDataService, ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilosComponent);
    component = fixture.componentInstance;

    // Mocking ApiService
    const apiService = TestBed.inject(ApiService);
    spyOn(apiService, 'getEstilos').and.returnValue(of([])); // Mock an empty response

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Revisar titulo`, () => {
    component.titulo = 'ValidTitle123';
    const check = component.verificarTitulo();
    expect(check).toBeTrue();
  });
  
  it(`Revisar Imformacion`, () => {
    component.informacion = 'Valid information with more than four characters.';
    const check = component.verificarInformacion();
    expect(check).toBeTrue();
  });
 

  it('should initialize data on ngOnInit', () => {
    component.ngOnInit();
    expect(component.lista).toEqual([]);
    expect(component.listaDescripcion).toEqual([]);
    expect(component.selectedOption).toEqual([]);
  });

  it('should have valid form when formularioValido is true', () => {
    component.titulo = 'Test Title';
    component.selectedOption = 'Test Option';
    component.informacion = 'Test Information';
    expect(component.formularioValido).toBe(true);
  });


  // Add more test cases for other methods as needed
});
