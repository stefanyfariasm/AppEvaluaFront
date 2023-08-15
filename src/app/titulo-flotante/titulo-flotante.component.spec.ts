import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TituloFlotanteComponent } from './titulo-flotante.component';
import { ApiService } from '../api.service';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';
import { of } from 'rxjs';

describe('TituloFlotanteComponent', () => {
  let component: TituloFlotanteComponent;
  let fixture: ComponentFixture<TituloFlotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloFlotanteComponent ],
      imports: [HttpClientTestingModule],
      providers: [SharedDataService, ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloFlotanteComponent);
    component = fixture.componentInstance;

    // Mocking ApiService
    const apiService = TestBed.inject(ApiService);
    spyOn(apiService, 'getEstilos').and.returnValue(of([])); // Mock an empty response

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown', () => {
    expect(component.showDropdown).toBeFalse(); // Dropdown should initially be closed

    component.toggleDropdown(new Event('click'));
    expect(component.showDropdown).toBeTrue(); // Dropdown should be open after toggling

    component.toggleDropdown(new Event('click'));
    expect(component.showDropdown).toBeFalse(); // Dropdown should be closed again after toggling
  });

  it('should update descripcionSeleccionada when an option is selected', () => {
    // Initialize test data
    const testData = [
      { nombre: 'Option1', descripcion: 'Description1' },
      { nombre: 'Option2', descripcion: 'Description2' },
    ];
    component.data1 = testData;

    // Select an option
    component.selectedOption = 'Option2';
    component.onOptionSelect();

    // Check if descripcionSeleccionada is updated correctly
    expect(component.descripcionSeleccionada).toEqual('Description2');
  });

  // Add more test cases for other methods and behaviors as needed
});
