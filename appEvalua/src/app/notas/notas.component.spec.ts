import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotasComponent } from './notas.component';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { Router } from '@angular/router';

describe('NotasComponent', () => {
  let component: NotasComponent;
  let fixture: ComponentFixture<NotasComponent>;
  let mockSharedDataService: jasmine.SpyObj<SharedDataService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockSharedDataService = jasmine.createSpyObj('SharedDataService', [], {
      titulo: '',
      estilo: '',
      sumaAroma: 0,
      sumaApariencia: 0,
      sumaSabor: 0,
      sumaSensacion: 0,
      sumaGeneral: 0,
      'imagen-aroma-malta': '',
      'imagen-aroma-lupulos': '',
      'imagen-aroma-fermen': '',
      'imagen-apariencia-claridad': '',
      'imagen-apariencia-formacion': '',
      'imagen-apariencia-retencion': '',
      'imagen-apariencia-color': '',
      'imagen-apariencia-espuma': '',
      'imagen-sabor-amargor': '',
      'imagen-sabor-equilibrio': '',
      'imagen-sabor-retrogusto': '',
      'imagen-sabor-malta': '',
      'imagen-sabor-lupulos': '',
      'imagen-sabor-fermen': '',
      'imagen-sensacion-cuerpo': '',
      'imagen-sensacion-carbonatacion': '',
      'imagen-sensacion-calentamiento': '',
      'imagen-sensacion-cremosidad': '',
      'imagen-sensacion-astringencia': ''
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [NotasComponent],
      providers: [
        { provide: SharedDataService, useValue: mockSharedDataService },
        { provide: Router, useValue: mockRouter }
      ],
      imports: [RouterTestingModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /evaluacion when volverEvaluar is called', () => {
    component.volverEvaluar();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/evaluacion']);
  });

});

