import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';

@Component({
  selector: 'app-titulo-flotante',
  templateUrl: './titulo-flotante.component.html',
  styleUrls: ['./titulo-flotante.component.css']
})
export class TituloFlotanteComponent implements OnInit {
  showDropdown = false;
  data1: any[] = [];
  titulo = '';
  estilo = '';
  selectedOption: any;
  descripcionSeleccionada: string | null = '';

  constructor(private apiService: ApiService, private sharedDataService: SharedDataService) {}

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  onOptionSelect(): void {
    const posicionSeleccionada = this.data1.findIndex(item => item.nombre === this.selectedOption);
    if (posicionSeleccionada !== -1 && posicionSeleccionada < this.data1.length) {
      this.descripcionSeleccionada = this.data1[posicionSeleccionada].descripcion;
    } else {
      this.descripcionSeleccionada = '';
    }
  }

  ngOnInit(): void {
    this.apiService.getEstilos().subscribe(
      (data) => {
        this.data1 = data;
        this.titulo = localStorage.getItem('titulo') || '';
        this.estilo = localStorage.getItem('estilo') || '';
        this.selectedOption = localStorage.getItem('selectedStyle') || this.data1[0].nombre;
        this.onOptionSelect(); // Llamar a onOptionSelect() al inicio para cargar la descripción inicial
        this.descripcionSeleccionada = ''; // Establecer la descripción en blanco al cargar el componente
      },
      (error) => {
        console.error('Error al obtener datos de la API', error);
      }
    );
  }

  guardarDatos(): void {
    localStorage.setItem('titulo', this.titulo);
    localStorage.setItem('estilo', this.estilo);
    localStorage.setItem('selectedStyle', this.selectedOption);
  }
}
