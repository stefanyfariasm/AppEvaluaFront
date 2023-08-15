import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { EvaluacionComponent } from './evaluacion.component';
import { Router } from '@angular/router';

describe('EvaluacionComponent', () => {
  let component: EvaluacionComponent;
  let fixture: ComponentFixture<EvaluacionComponent>;
  let apiServiceStub: Partial<ApiService>;
  let sharedDataServiceStub: Partial<SharedDataService>;

  beforeEach(() => {
    apiServiceStub = {
      postEvaluaciones: () => of({}),
    };

    sharedDataServiceStub = {
      titulo: undefined,
      estilo: undefined,
    };

    TestBed.configureTestingModule({
      declarations: [EvaluacionComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ApiService, useValue: apiServiceStub },
        { provide: SharedDataService, useValue: sharedDataServiceStub },
      ],
    });

    fixture = TestBed.createComponent(EvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store titulo and estilo in sharedDataService when guardarDatos is called', () => {
    const sharedDataService = TestBed.inject(SharedDataService);
    component.titulo = 'Test Title';
    component.estilo = 'Test Style';

    component.guardarDatos();

    expect(sharedDataService.titulo).toBe('Test Title');
    expect(sharedDataService.estilo).toBe('Test Style');
  });

});
