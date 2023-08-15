import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisEvaluacionesComponent } from './mis-evaluaciones.component';
import { of } from 'rxjs';
import { ApiService } from '../api.service';


describe('MisEvaluacionesComponent', () => {
  let component: MisEvaluacionesComponent;
  let fixture: ComponentFixture<MisEvaluacionesComponent>;
  let mockApiService: any;

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getEvaluaciones']);
    mockApiService.getEvaluaciones.and.returnValue(of([])); 
    await TestBed.configureTestingModule({
      declarations: [MisEvaluacionesComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch evaluaciones on ngOnInit', () => {
    const mockEvaluaciones = [{ nombre: 'Evaluacion 1' }, { nombre: 'Evaluacion 2' }];
    mockApiService.getEvaluaciones.and.returnValue(of(mockEvaluaciones));
    component.ngOnInit();
    expect(mockApiService.getEvaluaciones).toHaveBeenCalled();
  });

});
