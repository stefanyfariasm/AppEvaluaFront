import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoBebidaComponent } from './tipo-bebida.component';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('TipoBebidaComponent', () => {
  let component: TipoBebidaComponent;
  let fixture: ComponentFixture<TipoBebidaComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getAlimentos']);
    
    TestBed.configureTestingModule({
      declarations: [TipoBebidaComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBebidaComponent);
    component = fixture.componentInstance;
    mockApiService.getAlimentos.and.returnValue(of([{ nombre: '' }, { nombre: '' }, { nombre: '' }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate tipos from api', () => {
    expect(component.tipo1).toBe('');
    expect(component.tipo2).toBe('');
    expect(component.tipo3).toBe('');
  });

});
