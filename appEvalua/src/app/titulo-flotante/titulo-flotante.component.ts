import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';

@Component({
  selector: 'app-titulo-flotante',
  templateUrl: './titulo-flotante.component.html',
  styleUrls: ['./titulo-flotante.component.css']
})
export class TituloFlotanteComponent implements OnInit {
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }


data2=[  ]
  //titulo :string | undefined;
 //estilo = ' ';
  nota = 'Nota';
  data1=this.sharedDataService.data1

  informacion: string[] | undefined;
  //public titulo: string | undefined;
  //public estilo: string | undefined;
  constructor(private sharedDataService:SharedDataService) { }
  titulo=this.sharedDataService.titulo 
 estilo=this.sharedDataService.estilo
 
posicionSeleccionada = this.sharedDataService.data1.indexOf(this.estilo);
selectedOption: any; // Agrega esta línea
descripcionSeleccionada: string | null = null;
disableSelect: boolean = false;

onOptionSelect(): void {
  const posicionSeleccionada = this.data1.indexOf(this.selectedOption);
  if (posicionSeleccionada !== -1 && posicionSeleccionada < this.data2.length) {
    const informacion = this.data1[posicionSeleccionada][1];
    console.log(informacion)
    this.descripcionSeleccionada = informacion;
  } else {
    this.descripcionSeleccionada = null;
  }
}
  ngOnInit(): void {
    console.log("xxxxxxx",this.data1)
    const posicionSeleccionada = this.sharedDataService.data1.indexOf(this.estilo);
    if (posicionSeleccionada !== -1 && posicionSeleccionada < this.data1.length) {
      this.informacion = this.data1[posicionSeleccionada];
    } else {
      this.informacion = undefined;
    }
  }

}
