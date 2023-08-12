import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';

@Component({
  selector: 'app-titulo-flotante',
  templateUrl: './titulo-flotante.component.html',
  styleUrls: ['./titulo-flotante.component.css']
})
export class TituloFlotanteComponent implements OnInit {
  showDropdown = false;

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Detener la propagación del evento
    this.showDropdown = !this.showDropdown;
  }


data2=[  ]
  //titulo :string | undefined;
 //estilo = ' ';
  nota = 'Nota';
  data1=this.sharedDataService.data1
datadescripcion=this.sharedDataService.data2
  informacion: string[] | undefined;
  //public titulo: string | undefined;
  //public estilo: string | undefined;
  constructor(private sharedDataService:SharedDataService) { }
  titulo= localStorage.getItem("titulo")? localStorage.getItem("titulo") : this.sharedDataService.titulo;
  estilo= localStorage.getItem("estilo")? localStorage.getItem("estilo") : this.sharedDataService.estilo;
 
posicionSeleccionada = this.sharedDataService.data1.indexOf(this.estilo);
selectedOption: any; // Agrega esta línea
descripcionSeleccionada: string | null = null;
disableSelect: boolean = false;

onOptionSelect(): void {
  const posicionSeleccionada = this.data1.indexOf(this.selectedOption);
  if (posicionSeleccionada !== -1 && posicionSeleccionada < this.datadescripcion.length) {
    const descripcion = this.datadescripcion[posicionSeleccionada];
    this.descripcionSeleccionada = descripcion;
  } else {
    this.descripcionSeleccionada = null;
  }
}

ngOnInit(): void {
  const posicionSeleccionada = this.sharedDataService.data1.indexOf(this.sharedDataService.estilo);
  if (posicionSeleccionada !== -1 && posicionSeleccionada < this.sharedDataService.data1.length) {
    this.informacion = this.sharedDataService.data1[posicionSeleccionada];
  } else {
    this.informacion = undefined;
  }
}
}


