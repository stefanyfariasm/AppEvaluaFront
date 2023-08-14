import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FallasCardComponent } from './fallas-card.component';

describe('FallasCardComponent', () => {
  let component: FallasCardComponent;
  let fixture: ComponentFixture<FallasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FallasCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component with default values', () => {
    expect(component.title).toEqual('');
    expect(component.nivel).toEqual(0);
    expect(component.opciones).toEqual(['Nulo', 'Bajo', 'Medio', 'Alto']);
    expect(component.selectedOptions).toEqual([false, false, false, false]);
  });

  it('should update selectedOptions when selectNivel is called', () => {
    const index = 2;
    component.selectNivel(index);
    expect(component.selectedOptions).toEqual([false, false, true, false]);
  });
});

